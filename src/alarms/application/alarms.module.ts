import { DynamicModule, Module, Type } from '@nestjs/common';
import { AlarmsService } from './alarms.service';
import { AlarmFactory } from '../domain/factories/alarm.factory';
import { AlarmsController } from '../presenters/http/alarms.controller';

@Module({
  providers: [AlarmsService],
  controllers: [AlarmsController, AlarmFactory]
})
export class AlarmsModule {
  static withinInfrastructure(infrastructureModule: Type | DynamicModule){
    return{
      module: AlarmsModule,
      imports:[infrastructureModule]
    }
  }
}
