import { DashboardService } from './dashboard.service';
import { TrackAnalyticsDto } from './dto/track-analytics.dto';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
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
    analytics(dto: TrackAnalyticsDto, req: Request): Promise<{
        success: boolean;
    }>;
    getReports(req: any): Promise<{
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
}
