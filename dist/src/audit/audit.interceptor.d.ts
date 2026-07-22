import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuditService } from './audit.service';
export declare class AuditInterceptor implements NestInterceptor {
    private reflector;
    private auditService;
    constructor(reflector: Reflector, auditService: AuditService);
    intercept(context: ExecutionContext, next: CallHandler): import("rxjs").Observable<any>;
}
