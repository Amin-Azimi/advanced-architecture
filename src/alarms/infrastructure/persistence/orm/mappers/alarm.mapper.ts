import { Alarm } from "src/alarms/domain/alarm";
import { AlarmEntity } from "../entities/alarm.entity";
import { AlarmSeverity } from "src/alarms/domain/value-objects/alarm-severity";

export class AlarmMapper{
    static toDomain(alarmEntity: AlarmEntity): Alarm{
        const severity = new AlarmSeverity(alarmEntity.severity as AlarmSeverity['value'])
        const alarmModel = new Alarm(alarmEntity.id, alarmEntity.name, severity);

        return alarmModel;
    }

    static toPersistance(alarm: Alarm): AlarmEntity{
        const entity = new AlarmEntity();
        entity.id = alarm.id;
        entity.name = alarm.name;
        entity.severity = alarm.severity.value;
        
        return entity;
    }
}