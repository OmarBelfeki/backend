import { PrismaService } from '../../../prisma/prisma.service';
import { TrackAnalyticsDto } from './dto/track-analytics.dto';
export declare class DashboardService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getOverview(): Promise<{
        revenue: {
            totalRevenue: number;
            currentMonthRevenue: number;
            lastMonthRevenue: number;
            percentageChange: number;
        };
        subscriptions: {
            totalRevenue: number;
            currentMonthRevenue: number;
            lastMonthRevenue: number;
            percentageChange: number;
        };
        sales: {
            totalSales: number;
            currentMonthSales: number;
            lastMonthSales: number;
            percentageChange: number;
        };
        active: {
            activeNow: number;
            sinceLastHour: number;
        };
        recentSales: {
            monthlySalesCount: number;
            topSales: ({
                tenant: {
                    id: string;
                    companyName: string;
                    email: string;
                    timezone: string | null;
                    providerApiKey: string | null;
                    virtualBalance: import("@prisma/client-runtime-utils").Decimal;
                    taxId: string | null;
                    businessSector: string;
                    phone: string | null;
                    city: string | null;
                    postalCode: string | null;
                    address: string | null;
                    createdAt: Date;
                };
            } & {
                id: string;
                createdAt: Date;
                tenantId: string;
                status: import("../../../generated/prisma/enums").TransactionStatus;
                amount: import("@prisma/client-runtime-utils").Decimal;
                currency: string;
                konnectRef: string | null;
                nbSMS: number | null;
                remainingSMS: number | null;
                rateSMS: import("@prisma/client-runtime-utils").Decimal | null;
                invoiceUrl: string | null;
                endAt: Date | null;
            })[];
        };
        overview: {
            name: string;
            total: number;
        }[];
    }>;
    analytics(dto: TrackAnalyticsDto, req: any): Promise<{
        success: boolean;
    }>;
    getAnalytics(): Promise<{
        totalClick: {
            value: number;
            change: string;
        };
        uniqueVisitors: {
            value: number;
            change: string;
        };
        bounceRate: {
            value: string;
            change: string;
        };
        avgSession: {
            avgSession: string;
            change: string;
        };
        devices: {
            desktop: number;
            mobile: number;
            tablet: number;
        };
        referrers: {
            name: string;
            value: number;
        }[];
        weeklyAnalytics: {
            name: string;
            clicks: number;
            uniques: number;
        }[];
    }>;
    getReports(tenantId: string): Promise<{
        totalSent: {
            value: number;
            change: string;
        };
        delivered: {
            value: number;
            change: string;
        };
        failedRejected: {
            value: number;
            change: string;
        };
        totalEstimatedCost: {
            value: string;
            change: string;
        };
        messageUsageOverTime: {
            month: string;
            GROUP: number;
            SPREADSHEET: number;
            SMS: number;
            OTHER: number;
        }[];
        smsHistory: {
            totalSms: number;
            data: {
                date: string;
                sms: number;
            }[];
            pagination: {
                page: number;
                itemsPerPage: number;
                totalItems: number;
                totalPages: number;
            };
        };
        messageTypeDistribution: {
            type: string;
            count: number;
            fill: string;
        }[];
        deliveryStatusDistribution: {
            status: string;
            value: number;
        }[];
        deliveryStatusHistory: {
            totalSms: number;
            data: {
                date: string;
                status: string;
                sms: number;
            }[];
            pagination: {
                page: number;
                itemsPerPage: number;
                totalItems: number;
                totalPages: number;
            };
        };
        deliveryStatusOverTime: {
            month: string;
            delivered: number;
            expired: number;
            undelivered: number;
            submitted: number;
        }[];
    }>;
    revenue(): Promise<{
        totalRevenue: number;
        currentMonthRevenue: number;
        lastMonthRevenue: number;
        percentageChange: number;
    }>;
    subscriptions(): Promise<{
        totalRevenue: number;
        currentMonthRevenue: number;
        lastMonthRevenue: number;
        percentageChange: number;
    }>;
    sales(): Promise<{
        totalSales: number;
        currentMonthSales: number;
        lastMonthSales: number;
        percentageChange: number;
    }>;
    active(): Promise<{
        activeNow: number;
        sinceLastHour: number;
    }>;
    recentSales(): Promise<{
        monthlySalesCount: number;
        topSales: ({
            tenant: {
                id: string;
                companyName: string;
                email: string;
                timezone: string | null;
                providerApiKey: string | null;
                virtualBalance: import("@prisma/client-runtime-utils").Decimal;
                taxId: string | null;
                businessSector: string;
                phone: string | null;
                city: string | null;
                postalCode: string | null;
                address: string | null;
                createdAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            tenantId: string;
            status: import("../../../generated/prisma/enums").TransactionStatus;
            amount: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
            konnectRef: string | null;
            nbSMS: number | null;
            remainingSMS: number | null;
            rateSMS: import("@prisma/client-runtime-utils").Decimal | null;
            invoiceUrl: string | null;
            endAt: Date | null;
        })[];
    }>;
    overview(): Promise<{
        name: string;
        total: number;
    }[]>;
    totalClicks(): Promise<{
        value: number;
        change: string;
    }>;
    uniqueVisitors(): Promise<{
        value: number;
        change: string;
    }>;
    getBounceRate(): Promise<{
        value: string;
        change: string;
    }>;
    avgSessionWithTrend(): Promise<{
        avgSession: string;
        change: string;
    }>;
    getDeviceStats(): Promise<{
        desktop: number;
        mobile: number;
        tablet: number;
    }>;
    getReferrers(): Promise<{
        name: string;
        value: number;
    }[]>;
    getWeeklyAnalytics(): Promise<{
        name: string;
        clicks: number;
        uniques: number;
    }[]>;
    getTotalSent(tenantId: string): Promise<{
        value: number;
        change: string;
    }>;
    getDelivered(tenantId: string): Promise<{
        value: number;
        change: string;
    }>;
    getFailedRejected(tenantId: string): Promise<{
        value: number;
        change: string;
    }>;
    getTotalEstimatedCost(tenantId: string): Promise<{
        value: string;
        change: string;
    }>;
    getMessageUsageOverTime(tenantId: string): Promise<{
        month: string;
        GROUP: number;
        SPREADSHEET: number;
        SMS: number;
        OTHER: number;
    }[]>;
    getSmsHistory(tenantId: string, page?: number, itemsPerPage?: number): Promise<{
        totalSms: number;
        data: {
            date: string;
            sms: number;
        }[];
        pagination: {
            page: number;
            itemsPerPage: number;
            totalItems: number;
            totalPages: number;
        };
    }>;
    getMessageTypeDistribution(tenantId: string): Promise<{
        type: string;
        count: number;
        fill: string;
    }[]>;
    getDeliveryStatusOverTime(tenantId: string): Promise<{
        month: string;
        delivered: number;
        expired: number;
        undelivered: number;
        submitted: number;
    }[]>;
    getDeliveryStatusHistory(tenantId: string, page?: number, itemsPerPage?: number): Promise<{
        totalSms: number;
        data: {
            date: string;
            status: string;
            sms: number;
        }[];
        pagination: {
            page: number;
            itemsPerPage: number;
            totalItems: number;
            totalPages: number;
        };
    }>;
    getDeliveryStatusDistribution(tenantId: string): Promise<{
        status: string;
        value: number;
    }[]>;
    private calculateTrend;
}
