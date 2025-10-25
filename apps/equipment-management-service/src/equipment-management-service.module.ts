import { Module } from '@nestjs/common';
import { EquipmentManagementServiceController } from './equipment-management-service.controller';
import { EquipmentManagementServiceService } from './equipment-management-service.service';

@Module({
  imports: [],
  controllers: [EquipmentManagementServiceController],
  providers: [EquipmentManagementServiceService],
})
export class EquipmentManagementServiceModule {}
