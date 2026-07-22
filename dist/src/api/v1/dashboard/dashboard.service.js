"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const ua_parser_js_1 = require("ua-parser-js");
let DashboardService = class DashboardService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getOverview() {
        return {
            revenue: await this.revenue(),
            subscriptions: await this.subscriptions(),
            sales: await this.sales(),
            active: await this.active(),
            recentSales: await this.recentSales(),
            overview: await this.overview(),
        };
    }
    async analytics(dto, req) {
        const parser = new ua_parser_js_1.UAParser(req.headers['user-agent']);
        const device = parser.getDevice().type || 'desktop';
        const browser = parser.getBrowser().name || 'unknown';
        const os = parser.getOS().name || 'unknown';
        let session = await this.prismaService.session.findUnique({
            where: {
                id: dto.sessionId,
            },
        });
        if (!session) {
            session = await this.prismaService.session.create({
                data: {
                    id: dto.sessionId,
                    visitorId: dto.visitorId,
                    device,
                    browser,
                    os,
                    ip: req.ip,
                    startedAt: new Date(),
                },
            });
        }
        await this.prismaService.analytics.create({
            data: {
                sessionId: session.id,
                page: dto.page,
                referrer: dto.referrer,
            },
        });
        await this.prismaService.session.update({
            where: {
                id: session.id,
            },
            data: {
                endedAt: new Date(),
            },
        });
        return {
            success: true,
        };
    }
    async getAnalytics() {
        return {
            totalClick: await this.totalClicks(),
            uniqueVisitors: await this.uniqueVisitors(),
            bounceRate: await this.getBounceRate(),
            avgSession: await this.avgSessionWithTrend(),
            devices: await this.getDeviceStats(),
            referrers: await this.getReferrers(),
            weeklyAnalytics: await this.getWeeklyAnalytics()
        };
    }
    async getReports(tenantId) {
        return {
            totalSent: await this.getTotalSent(tenantId),
            delivered: await this.getDelivered(tenantId),
            failedRejected: await this.getFailedRejected(tenantId),
            totalEstimatedCost: await this.getTotalEstimatedCost(tenantId),
            messageUsageOverTime: await this.getMessageUsageOverTime(tenantId),
            smsHistory: await this.getSmsHistory(tenantId),
            messageTypeDistribution: await this.getMessageTypeDistribution(tenantId),
            deliveryStatusDistribution: await this.getDeliveryStatusDistribution(tenantId),
            deliveryStatusHistory: await this.getDeliveryStatusHistory(tenantId),
            deliveryStatusOverTime: await this.getDeliveryStatusOverTime(tenantId),
        };
    }
    async revenue() {
        const res = await this.prismaService.$queryRaw `
        SELECT
            -- Total revenue (all time)
            COALESCE(SUM("virtualBalance"), 0) AS total,

            -- Current month
            COALESCE(SUM(CASE
                             WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE)
                                 THEN "virtualBalance" ELSE 0 END), 0) AS "currentMonth",

            -- Last month
            COALESCE(SUM(CASE
                             WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
                                 THEN "virtualBalance" ELSE 0 END), 0) AS "lastMonth",

            -- Percentage change
            CASE
                WHEN COALESCE(SUM(CASE
                                      WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
                                          THEN "virtualBalance" ELSE 0 END), 0) = 0
                    THEN 0
                ELSE (
                         (
                             SUM(CASE
                                     WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE)
                                         THEN "virtualBalance" ELSE 0 END)
                                 -
                             SUM(CASE
                                     WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
                                         THEN "virtualBalance" ELSE 0 END)
                             )
                             /
                         SUM(CASE
                                 WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
                                     THEN "virtualBalance" ELSE 0 END)
                         ) * 100
                END AS percentage

        FROM "Tenant";
		`;
        return {
            totalRevenue: res[0].total,
            currentMonthRevenue: res[0].currentMonth,
            lastMonthRevenue: res[0].lastMonth,
            percentageChange: res[0].percentage,
        };
    }
    async subscriptions() {
        const res = await this.prismaService.$queryRaw `
		SELECT
			-- Total subscriptions
			COUNT(*) AS total,

			-- Current month subscriptions
			COUNT(
				CASE
					WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE)
					THEN 1
				END
			) AS "currentMonth",

			-- Last month subscriptions
			COUNT(
				CASE
					WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
					THEN 1
				END
			) AS "lastMonth",

			-- Percentage change
			CASE
				WHEN COUNT(
					CASE
						WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
						THEN 1
					END
				) = 0
				THEN 0
				ELSE (
					(
						COUNT(
							CASE
								WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE)
								THEN 1
							END
						)
						-
						COUNT(
							CASE
								WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
								THEN 1
							END
						)
					)::float
					/
					COUNT(
						CASE
							WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
							THEN 1
						END
					)
				) * 100
			END AS percentage

		FROM "Transaction";
	`;
        return {
            totalRevenue: Number(res[0].total),
            currentMonthRevenue: Number(res[0].currentMonth),
            lastMonthRevenue: Number(res[0].lastMonth),
            percentageChange: Number(res[0].percentage.toFixed(2)),
        };
    }
    async sales() {
        const res = await this.prismaService.$queryRaw `
			SELECT
			  -- Total sales (all successful transactions)
			  COALESCE(SUM("amount"), 0) AS total,
			
			  -- Current month sales
			  COALESCE(SUM(CASE 
			    WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE)
			    THEN "amount" ELSE 0 END), 0) AS "currentMonth",
			
			  -- Last month sales
			  COALESCE(SUM(CASE 
			    WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
			    THEN "amount" ELSE 0 END), 0) AS "lastMonth",
			
			  -- Percentage change vs last month
			  CASE 
			    WHEN COALESCE(SUM(CASE 
			      WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
			      THEN "amount" ELSE 0 END), 0) = 0
			    THEN 0
			    ELSE (
			      (
			        SUM(CASE 
			          WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE)
			          THEN "amount" ELSE 0 END)
			        -
			        SUM(CASE 
			          WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
			          THEN "amount" ELSE 0 END)
			      )
			      /
			      SUM(CASE 
			        WHEN DATE_TRUNC('month', "createdAt") = DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
			        THEN "amount" ELSE 0 END)
			    ) * 100
			  END AS percentage
			
			FROM "Transaction"
			WHERE "status" = 'COMPLETED';
			`;
        return {
            totalSales: Number(res[0].total),
            currentMonthSales: Number(res[0].currentMonth),
            lastMonthSales: Number(res[0].lastMonth),
            percentageChange: Number(res[0].percentage.toFixed(2)),
        };
    }
    async active() {
        const res = await this.prismaService.$queryRaw `
			SELECT
			  -- Active now: users active in the last 5 minutes (adjust window as needed)
			  (SELECT COUNT(*) 
			   FROM "User"
			   WHERE "isActive" = 'yes' 
			     AND "lastActiveAt" >= NOW() - INTERVAL '5 MINUTES'
			  ) AS "activeNow",
			
			  -- Active one hour ago: users active between 65-60 minutes ago
			  (SELECT COUNT(*) 
			   FROM "User"
			   WHERE "isActive" = 'yes' 
			     AND "lastActiveAt" >= NOW() - INTERVAL '1 HOUR' 
			     AND "lastActiveAt" < NOW() - INTERVAL '55 MINUTES'
			  ) AS "activeOneHourAgo",
			
			  -- Difference
			  (
			    (SELECT COUNT(*) 
			     FROM "User"
			     WHERE "isActive" = 'yes' 
			       AND "lastActiveAt" >= NOW() - INTERVAL '5 MINUTES'
			    )
			    -
			    (SELECT COUNT(*) 
			     FROM "User"
			     WHERE "isActive" = 'yes' 
			       AND "lastActiveAt" >= NOW() - INTERVAL '1 HOUR' 
			       AND "lastActiveAt" < NOW() - INTERVAL '55 MINUTES'
			    )
			  ) AS diff
			`;
        return {
            activeNow: Number(res[0].activeNow),
            sinceLastHour: Number(res[0].diff),
        };
    }
    async recentSales() {
        const currentMonth = new Date();
        currentMonth.setDate(1);
        const monthlySalesCount = await this.prismaService.transaction.count({
            where: {
                status: 'COMPLETED',
                createdAt: {
                    gte: currentMonth,
                },
            },
        });
        const topSales2 = await this.prismaService.transaction.findMany({
            where: {
                status: 'COMPLETED',
                createdAt: {
                    gte: currentMonth,
                },
            },
            take: 5,
            orderBy: {
                amount: 'desc',
            },
            include: {
                tenant: true,
            },
        });
        const seen = new Set();
        const topSales = topSales2.filter(tx => {
            if (seen.has(tx.tenantId))
                return false;
            seen.add(tx.tenantId);
            return true;
        }).slice(0, 5);
        return {
            monthlySalesCount,
            topSales,
        };
    }
    async overview() {
        const result = await this.prismaService.transaction.groupBy({
            by: ['createdAt'],
            where: {
                status: 'COMPLETED',
            },
            _sum: {
                amount: true,
            },
            orderBy: {
                createdAt: 'asc',
            },
        });
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const data = months.map((month) => ({
            name: month,
            total: 0,
        }));
        result.forEach((item) => {
            const monthIndex = new Date(item.createdAt).getMonth();
            data[monthIndex].total += Number(item._sum.amount || 0);
        });
        return data;
    }
    async totalClicks() {
        const now = new Date();
        const currentWeekStart = new Date(now);
        currentWeekStart.setDate(now.getDate() - 7);
        const previousWeekStart = new Date(now);
        previousWeekStart.setDate(now.getDate() - 14);
        const previousWeekEnd = new Date(now);
        previousWeekEnd.setDate(now.getDate() - 7);
        const currentTotal = await this.prismaService.analytics.count({
            where: {
                createdAt: {
                    gte: currentWeekStart,
                },
            },
        });
        const previousTotal = await this.prismaService.analytics.count({
            where: {
                createdAt: {
                    gte: previousWeekStart,
                    lt: previousWeekEnd,
                },
            },
        });
        let percentage = 0;
        if (previousTotal > 0) {
            percentage =
                ((currentTotal - previousTotal) /
                    previousTotal) *
                    100;
        }
        return {
            value: currentTotal,
            change: `${percentage >= 0 ? '+' : ''}${percentage.toFixed(1)}%`,
        };
    }
    async uniqueVisitors() {
        const now = new Date();
        const startOfThisWeek = new Date(now);
        startOfThisWeek.setDate(now.getDate() - 7);
        const startOfLastWeek = new Date(now);
        startOfLastWeek.setDate(now.getDate() - 14);
        const endOfLastWeek = new Date(now);
        endOfLastWeek.setDate(now.getDate() - 7);
        const thisWeek = await this.prismaService.session.findMany({
            where: {
                createdAt: {
                    gte: startOfThisWeek,
                },
            },
            select: {
                visitorId: true,
            },
            distinct: ['visitorId'],
        });
        const lastWeek = await this.prismaService.session.findMany({
            where: {
                createdAt: {
                    gte: startOfLastWeek,
                    lt: endOfLastWeek,
                },
            },
            select: {
                visitorId: true,
            },
            distinct: ['visitorId'],
        });
        const thisCount = thisWeek.length;
        const lastCount = lastWeek.length;
        let change = 0;
        if (lastCount > 0) {
            change = ((thisCount - lastCount) / lastCount) * 100;
        }
        return {
            value: thisCount,
            change: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`,
        };
    }
    async getBounceRate() {
        const now = new Date();
        const startOfThisWeek = new Date(now);
        startOfThisWeek.setDate(now.getDate() - 7);
        const startOfLastWeek = new Date(now);
        startOfLastWeek.setDate(now.getDate() - 14);
        const endOfLastWeek = startOfThisWeek;
        const thisWeekSessions = await this.prismaService.session.findMany({
            where: {
                startedAt: {
                    gte: startOfThisWeek,
                },
            },
            include: {
                analytics: true,
            },
        });
        const thisWeekBounced = thisWeekSessions.filter((s) => s.analytics.length === 1).length;
        const thisWeekBounceRate = thisWeekSessions.length === 0
            ? 0
            : (thisWeekBounced /
                thisWeekSessions.length) *
                100;
        const lastWeekSessions = await this.prismaService.session.findMany({
            where: {
                startedAt: {
                    gte: startOfLastWeek,
                    lt: endOfLastWeek,
                },
            },
            include: {
                analytics: true,
            },
        });
        const lastWeekBounced = lastWeekSessions.filter((s) => s.analytics.length === 1).length;
        const lastWeekBounceRate = lastWeekSessions.length === 0
            ? 0
            : (lastWeekBounced /
                lastWeekSessions.length) *
                100;
        const change = lastWeekBounceRate === 0
            ? 0
            : ((thisWeekBounceRate -
                lastWeekBounceRate) /
                lastWeekBounceRate) *
                100;
        return {
            value: `${Math.round(thisWeekBounceRate)}%`,
            change: `${change > 0 ? '+' : ''}${change.toFixed(1)}%`,
        };
    }
    async avgSessionWithTrend() {
        const now = new Date();
        const startOfThisWeek = new Date(now);
        startOfThisWeek.setDate(now.getDate() - 7);
        const startOfLastWeek = new Date(now);
        startOfLastWeek.setDate(now.getDate() - 14);
        const thisWeekSessions = await this.prismaService.session.findMany({
            where: {
                endedAt: { not: null },
                startedAt: {
                    gte: startOfThisWeek,
                },
            },
        });
        const lastWeekSessions = await this.prismaService.session.findMany({
            where: {
                endedAt: { not: null },
                startedAt: {
                    gte: startOfLastWeek,
                    lt: startOfThisWeek,
                },
            },
        });
        const calcAvg = (sessions) => {
            if (!sessions.length)
                return 0;
            const total = sessions.reduce((sum, s) => {
                const duration = new Date(s.endedAt).getTime() -
                    new Date(s.startedAt).getTime();
                return sum + duration;
            }, 0);
            return total / sessions.length;
        };
        const thisWeekAvg = calcAvg(thisWeekSessions);
        const lastWeekAvg = calcAvg(lastWeekSessions);
        const diffSeconds = (thisWeekAvg - lastWeekAvg) / 1000;
        const format = (ms) => {
            const minutes = Math.floor(ms / 1000 / 60);
            const seconds = Math.floor((ms / 1000) % 60);
            return `${minutes}m ${seconds}s`;
        };
        return {
            avgSession: format(thisWeekAvg),
            change: diffSeconds >= 0
                ? `+${Math.round(diffSeconds)}s`
                : `${Math.round(diffSeconds)}s`,
        };
    }
    async getDeviceStats() {
        const sessions = await this.prismaService.session.findMany({
            select: {
                device: true,
            },
        });
        const total = sessions.length;
        if (!total) {
            return {
                desktop: 0,
                mobile: 0,
                tablet: 0,
            };
        }
        let desktop = 0;
        let mobile = 0;
        let tablet = 0;
        for (const s of sessions) {
            const device = (s.device || '').toLowerCase();
            if (device === 'mobile') {
                mobile++;
            }
            else if (device === 'tablet') {
                tablet++;
            }
            else {
                desktop++;
            }
        }
        return {
            desktop: Math.round((desktop / total) * 100),
            mobile: Math.round((mobile / total) * 100),
            tablet: Math.round((tablet / total) * 100),
        };
    }
    async getReferrers() {
        const data = await this.prismaService.analytics.groupBy({
            by: ['referrer'],
            _count: {
                referrer: true,
            },
        });
        return data
            .map((item) => ({
            name: item.referrer || 'Direct',
            value: item._count.referrer,
        }))
            .sort((a, b) => b.value - a.value);
    }
    async getWeeklyAnalytics() {
        const now = new Date();
        const start = new Date(now);
        start.setDate(now.getDate() - 6);
        const data = await this.prismaService.analytics.findMany({
            where: {
                createdAt: {
                    gte: start,
                },
            },
            select: {
                createdAt: true,
                sessionId: true,
            },
        });
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const result = days.map((day, index) => {
            const dayDate = new Date(start);
            dayDate.setDate(start.getDate() + index);
            const nextDay = new Date(dayDate);
            nextDay.setDate(dayDate.getDate() + 1);
            const dayData = data.filter((d) => d.createdAt >= dayDate &&
                d.createdAt < nextDay);
            const clicks = dayData.length;
            const uniques = new Set(dayData.map((d) => d.sessionId)).size;
            return {
                name: day,
                clicks,
                uniques,
            };
        });
        return result;
    }
    async getTotalSent(tenantId) {
        const now = new Date();
        const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const previousMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const previousMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        const currentTotal = await this.prismaService.message.count({
            where: {
                tenantId,
                sentAt: {
                    gte: currentMonthStart,
                },
            },
        });
        const previousTotal = await this.prismaService.message.count({
            where: {
                tenantId,
                sentAt: {
                    gte: previousMonthStart,
                    lte: previousMonthEnd,
                },
            },
        });
        return this.calculateTrend(currentTotal, previousTotal);
    }
    async getDelivered(tenantId) {
        const now = new Date();
        const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const previousMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const previousMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        const currentTotal = await this.prismaService.message.count({
            where: {
                tenantId,
                status: 'DELIVRD',
                sentAt: {
                    gte: currentMonthStart,
                },
            },
        });
        const previousTotal = await this.prismaService.message.count({
            where: {
                tenantId,
                status: 'DELIVRD',
                sentAt: {
                    gte: previousMonthStart,
                    lte: previousMonthEnd,
                },
            },
        });
        return this.calculateTrend(currentTotal, previousTotal);
    }
    async getFailedRejected(tenantId) {
        const now = new Date();
        const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const previousMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const previousMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        const failedStatuses = [
            'UNDELIV',
            'REJECTED',
            'EXPIRED',
        ];
        const currentTotal = await this.prismaService.message.count({
            where: {
                tenantId,
                status: {
                    in: failedStatuses,
                },
                sentAt: {
                    gte: currentMonthStart,
                },
            },
        });
        const previousTotal = await this.prismaService.message.count({
            where: {
                tenantId,
                status: {
                    in: failedStatuses,
                },
                sentAt: {
                    gte: previousMonthStart,
                    lte: previousMonthEnd,
                },
            },
        });
        return this.calculateTrend(currentTotal, previousTotal);
    }
    async getTotalEstimatedCost(tenantId) {
        const now = new Date();
        const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const previousMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const previousMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        const current = await this.prismaService.message.aggregate({
            _sum: {
                costInCredits: true,
            },
            where: {
                tenantId,
                sentAt: {
                    gte: currentMonthStart,
                },
            },
        });
        const previous = await this.prismaService.message.aggregate({
            _sum: {
                costInCredits: true,
            },
            where: {
                tenantId,
                sentAt: {
                    gte: previousMonthStart,
                    lte: previousMonthEnd,
                },
            },
        });
        const currentTotal = Number(current._sum.costInCredits || 0);
        const previousTotal = Number(previous._sum.costInCredits || 0);
        const percentage = previousTotal === 0
            ? 100
            : ((currentTotal - previousTotal) /
                previousTotal) *
                100;
        return {
            value: currentTotal.toFixed(2),
            change: `${percentage >= 0 ? '+' : ''}${percentage.toFixed(1)}%`,
        };
    }
    async getMessageUsageOverTime(tenantId) {
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const messages = await this.prismaService.message.findMany({
            where: {
                tenantId,
                sentAt: {
                    gte: startOfYear,
                },
            },
            select: {
                type: true,
                sentAt: true,
            },
        });
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const chartData = months.map((month) => ({
            month,
            GROUP: 0,
            SPREADSHEET: 0,
            SMS: 0,
            OTHER: 0,
        }));
        messages.forEach((message) => {
            if (!message.sentAt)
                return;
            const monthIndex = new Date(message.sentAt).getMonth();
            const type = message.type || 'OTHER';
            chartData[monthIndex][type] += 1;
        });
        return chartData;
    }
    async getSmsHistory(tenantId, page = 1, itemsPerPage = 7) {
        const skip = (page - 1) * itemsPerPage;
        const messages = await this.prismaService.message.findMany({
            where: {
                tenantId,
            },
            select: {
                sentAt: true,
            },
            orderBy: {
                sentAt: 'desc',
            },
        });
        const grouped = {};
        messages.forEach((message) => {
            if (!message.sentAt)
                return;
            const date = new Date(message.sentAt)
                .toISOString()
                .split('T')[0];
            grouped[date] = (grouped[date] || 0) + 1;
        });
        const formattedData = Object.entries(grouped).map(([date, sms]) => ({
            date,
            sms,
        }));
        const paginatedData = formattedData.slice(skip, skip + itemsPerPage);
        const totalSms = formattedData.reduce((total, item) => total + item.sms, 0);
        return {
            totalSms,
            data: paginatedData,
            pagination: {
                page,
                itemsPerPage,
                totalItems: formattedData.length,
                totalPages: Math.ceil(formattedData.length / itemsPerPage),
            },
        };
    }
    async getMessageTypeDistribution(tenantId) {
        const result = await this.prismaService.message.groupBy({
            by: ['type'],
            where: {
                tenantId,
            },
            _count: {
                type: true,
            },
        });
        const chartData = [
            {
                type: 'GROUP',
                count: 0,
                fill: 'var(--chart-1)',
            },
            {
                type: 'SPREADSHEET',
                count: 0,
                fill: 'var(--chart-2)',
            },
            {
                type: 'SMS',
                count: 0,
                fill: 'var(--chart-3)',
            },
            {
                type: 'OTHER',
                count: 0,
                fill: 'var(--chart-5)',
            },
        ];
        result.forEach((item) => {
            switch (item.type) {
                case 'GROUP':
                    chartData[0].count = item._count.type;
                    break;
                case 'SPREADSHEET':
                    chartData[1].count = item._count.type;
                    break;
                case 'SMS':
                    chartData[2].count = item._count.type;
                    break;
                case 'OTHER':
                    chartData[3].count = item._count.type;
                    break;
            }
        });
        return chartData;
    }
    async getDeliveryStatusOverTime(tenantId) {
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const messages = await this.prismaService.message.findMany({
            where: {
                tenantId,
                sentAt: {
                    gte: startOfYear,
                },
            },
            select: {
                status: true,
                sentAt: true,
            },
        });
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const chartData = months.map((month) => ({
            month,
            delivered: 0,
            expired: 0,
            undelivered: 0,
            submitted: 0,
        }));
        messages.forEach((message) => {
            if (!message.sentAt)
                return;
            const monthIndex = new Date(message.sentAt).getMonth();
            switch (message.status) {
                case 'DELIVRD':
                    chartData[monthIndex].delivered += 1;
                    break;
                case 'EXPIRED':
                    chartData[monthIndex].expired += 1;
                    break;
                case 'UNDELIV':
                case 'REJECTED':
                    chartData[monthIndex].undelivered += 1;
                    break;
                case 'UNKNOWN':
                default:
                    chartData[monthIndex].submitted += 1;
                    break;
            }
        });
        return chartData;
    }
    async getDeliveryStatusHistory(tenantId, page = 1, itemsPerPage = 7) {
        const skip = (page - 1) * itemsPerPage;
        const messages = await this.prismaService.message.findMany({
            where: {
                tenantId,
            },
            select: {
                status: true,
                sentAt: true,
            },
            orderBy: {
                sentAt: 'desc',
            },
        });
        const grouped = {};
        messages.forEach((message) => {
            if (!message.sentAt)
                return;
            const date = new Date(message.sentAt)
                .toISOString()
                .split('T')[0]
                .split('-')
                .join('/');
            let status = 'submitted';
            switch (message.status) {
                case 'DELIVRD':
                    status = 'delivered';
                    break;
                case 'EXPIRED':
                    status = 'expired';
                    break;
                case 'UNDELIV':
                case 'REJECTED':
                    status = 'undelivered';
                    break;
                case 'UNKNOWN':
                default:
                    status = 'submitted';
                    break;
            }
            const key = `${date}-${status}`;
            if (!grouped[key]) {
                grouped[key] = {
                    status,
                    sms: 0,
                };
            }
            grouped[key].sms += 1;
        });
        const formattedData = Object.entries(grouped).map(([key, value]) => ({
            date: key.split('-')[0].replaceAll('/', '-'),
            status: value.status,
            sms: value.sms,
        }));
        const paginatedData = formattedData.slice(skip, skip + itemsPerPage);
        const totalSms = formattedData.reduce((total, item) => total + item.sms, 0);
        return {
            totalSms,
            data: paginatedData,
            pagination: {
                page,
                itemsPerPage,
                totalItems: formattedData.length,
                totalPages: Math.ceil(formattedData.length / itemsPerPage),
            },
        };
    }
    async getDeliveryStatusDistribution(tenantId) {
        const result = await this.prismaService.message.groupBy({
            by: ['status'],
            where: {
                tenantId,
            },
            _count: {
                status: true,
            },
        });
        const chartData = [
            {
                status: 'delivered',
                value: 0,
            },
            {
                status: 'expired',
                value: 0,
            },
            {
                status: 'undelivered',
                value: 0,
            },
            {
                status: 'submitted',
                value: 0,
            },
        ];
        result.forEach((item) => {
            switch (item.status) {
                case 'DELIVRD':
                    chartData[0].value = item._count.status;
                    break;
                case 'EXPIRED':
                    chartData[1].value = item._count.status;
                    break;
                case 'UNDELIV':
                case 'REJECTED':
                    chartData[2].value += item._count.status;
                    break;
                case 'UNKNOWN':
                default:
                    chartData[3].value += item._count.status;
                    break;
            }
        });
        return chartData;
    }
    calculateTrend(currentTotal, previousTotal) {
        const percentage = previousTotal === 0
            ? 100
            : ((currentTotal - previousTotal) / previousTotal) * 100;
        return {
            value: currentTotal,
            change: `${percentage >= 0 ? '+' : ''}${percentage.toFixed(1)}%`,
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map