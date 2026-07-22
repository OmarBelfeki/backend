"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const audit_service_1 = require("./audit/audit.service");
const audit_interceptor_1 = require("./audit/audit.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const reflector = app.get(core_1.Reflector);
    const auditService = app.get(audit_service_1.AuditService);
    app.useGlobalInterceptors(new audit_interceptor_1.AuditInterceptor(reflector, auditService));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('SMS API')
        .setDescription('SMS Platform API description')
        .setVersion('1.0')
        .addTag('SMS')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    const corsConfig = {
        development: [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://127.0.0.1:3000',
            'http://frontend:3000',
            'http://next_frontend:3000',
        ],
        staging: ['https://staging.your-domain.com', 'http://localhost:3000'],
        production: [
            'https://your-domain.com',
            'https://www.your-domain.com',
            process.env.AWS_URL,
        ].filter(Boolean),
    };
    const nodeEnv = process.env.NODE_ENV || 'development';
    const allowedOrigins = corsConfig[nodeEnv] || corsConfig.development;
    app.enableCors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    });
    await app.listen(Number(process.env.PORT), '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map