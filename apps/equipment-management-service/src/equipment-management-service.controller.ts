import { Controller, Get } from '@nestjs/common';
import { EquipmentManagementServiceService } from './equipment-management-service.service';

@Controller()
export class EquipmentManagementServiceController {
  constructor(private readonly equipmentManagementServiceService: EquipmentManagementServiceService) {}

  @Get()
  getHello(): string {
    return this.equipmentManagementServiceService.getHello();
  }
}
