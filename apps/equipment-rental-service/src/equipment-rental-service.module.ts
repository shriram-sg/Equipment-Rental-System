import { Module } from '@nestjs/common';
import { EquipmentRentalServiceController } from './equipment-rental-service.controller';
import { EquipmentRentalServiceService } from './equipment-rental-service.service';

@Module({
  imports: [],
  controllers: [EquipmentRentalServiceController],
  providers: [EquipmentRentalServiceService],
})
export class EquipmentRentalServiceModule {}
