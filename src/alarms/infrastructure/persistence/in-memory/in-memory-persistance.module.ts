import { Module } from "@nestjs/common";
import { InMemoryAlarmRepository } from "./repositories/alarm.repository";
import { AlarmRepository } from "src/alarms/application/ports/alarm.repository";

@Module({
    providers:[
        {
            provide: AlarmRepository,
            useClass: InMemoryAlarmRepository
        }
    ],
    exports:[AlarmRepository]
})
export class InMemoryAlarmPersistanceModule{}