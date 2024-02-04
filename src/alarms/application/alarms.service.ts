import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateAlarmCommand } from './commands/create-alarm.command';

@Injectable()
export class AlarmsService {
  create(createAlarmDto: CreateAlarmCommand) {
    throw new NotImplementedException(createAlarmDto);
  }
}
