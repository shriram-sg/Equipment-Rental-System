import { NestFactory } from '@nestjs/core';
import { EquipmentHistoryServiceModule } from './equipment-history-service.module';

async function bootstrap() {
  const app = await NestFactory.create(EquipmentHistoryServiceModule);
  await app.listen(process.env.port ?? 4002);
}
bootstrap();
