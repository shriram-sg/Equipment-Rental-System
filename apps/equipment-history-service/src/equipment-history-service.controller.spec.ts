import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentHistoryServiceController } from './equipment-history-service.controller';
import { EquipmentHistoryServiceService } from './equipment-history-service.service';

describe('EquipmentHistoryServiceController', () => {
  let equipmentHistoryServiceController: EquipmentHistoryServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentHistoryServiceController],
      providers: [EquipmentHistoryServiceService],
    }).compile();

    equipmentHistoryServiceController = app.get<EquipmentHistoryServiceController>(EquipmentHistoryServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(equipmentHistoryServiceController.getHello()).toBe('Hello World!');
    });
  });
});
