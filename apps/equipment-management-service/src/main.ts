import { NestFactory } from '@nestjs/core';
import { EquipmentManagementServiceModule } from './equipment-management-service.module';

async function bootstrap() {
  const app = await NestFactory.create(EquipmentManagementServiceModule);
  await app.listen(process.env.port ?? 4001);
}
bootstrap();
