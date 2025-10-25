import { Module } from '@nestjs/common';
import { EquipmentHistoryServiceController } from './equipment-history-service.controller';
import { EquipmentHistoryServiceService } from './equipment-history-service.service';

@Module({
  imports: [],
  controllers: [EquipmentHistoryServiceController],
  providers: [EquipmentHistoryServiceService],
})
export class EquipmentHistoryServiceModule {}
