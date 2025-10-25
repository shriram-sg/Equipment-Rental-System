import { NestFactory } from '@nestjs/core';
import { EquipmentRentalServiceModule } from './equipment-rental-service.module';

async function bootstrap() {
  const app = await NestFactory.create(EquipmentRentalServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
