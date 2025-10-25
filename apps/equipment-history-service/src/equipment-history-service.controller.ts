import { Controller, Get } from '@nestjs/common';
import { EquipmentHistoryServiceService } from './equipment-history-service.service';

@Controller()
export class EquipmentHistoryServiceController {
  constructor(private readonly equipmentHistoryServiceService: EquipmentHistoryServiceService) {}

  @Get()
  getHello(): string {
    return this.equipmentHistoryServiceService.getHello();
  }
}
