import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentRentalServiceController } from './equipment-rental-service.controller';
import { EquipmentRentalServiceService } from './equipment-rental-service.service';

describe('EquipmentRentalServiceController', () => {
  let equipmentRentalServiceController: EquipmentRentalServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentRentalServiceController],
      providers: [EquipmentRentalServiceService],
    }).compile();

    equipmentRentalServiceController = app.get<EquipmentRentalServiceController>(EquipmentRentalServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(equipmentRentalServiceController.getHello()).toBe('Hello World!');
    });
  });
});
