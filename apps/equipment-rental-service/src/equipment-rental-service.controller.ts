import { Controller, Get } from '@nestjs/common';
import { EquipmentRentalServiceService } from './equipment-rental-service.service';

@Controller()
export class EquipmentRentalServiceController {
  constructor(private readonly equipmentRentalServiceService: EquipmentRentalServiceService) {}

  @Get()
  getHello(): string {
    return this.equipmentRentalServiceService.getHello();
  }
}
