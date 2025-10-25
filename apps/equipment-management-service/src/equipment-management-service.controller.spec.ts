import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentManagementServiceController } from './equipment-management-service.controller';
import { EquipmentManagementServiceService } from './equipment-management-service.service';

describe('EquipmentManagementServiceController', () => {
  let equipmentManagementServiceController: EquipmentManagementServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentManagementServiceController],
      providers: [EquipmentManagementServiceService],
    }).compile();

    equipmentManagementServiceController = app.get<EquipmentManagementServiceController>(EquipmentManagementServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(equipmentManagementServiceController.getHello()).toBe('Hello World!');
    });
  });
});
