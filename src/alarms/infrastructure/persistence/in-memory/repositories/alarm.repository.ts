import { Injectable } from "@nestjs/common";
import { AlarmRepository } from "src/alarms/application/ports/alarm.repository";
import { Alarm } from "src/alarms/domain/alarm";
import { AlarmEntity } from "../entities/alarm.entity";
import { Repository } from "typeorm";
import { AlarmMapper } from "../mappers/alarm.mapper";

@Injectable()
export class InMemoryAlarmRepository implements AlarmRepository{
    private readonly alarms = new Map<string , AlarmEntity>()

    async findAll(): Promise<Alarm[]> {

        const entities= Array.from(this.alarms.values());
        return entities.map((entity) => AlarmMapper.toDomain(entity));
    }
    async save(alarm: Alarm): Promise<Alarm> {
        const persistanceModel = AlarmMapper.toPersistance(alarm);
        this.alarms.set(persistanceModel.id, persistanceModel);

        const newModel = this.alarms.get(persistanceModel.id);
        return AlarmMapper.toDomain(newModel);
    }

}