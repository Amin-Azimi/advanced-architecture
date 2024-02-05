import { Module } from "@nestjs/common";
import { OrmAlarmPersistanceModule } from "./persistence/orm/orm-persistance.module";
import { InMemoryAlarmPersistanceModule } from "./persistence/in-memory/in-memory-persistance.module";

@Module({})
export class AlarmsInfrastructureModule{
    static use(driver: 'orm' | 'in-memory'){
        const persistanceModule = driver === 'orm'?
         OrmAlarmPersistanceModule :
          InMemoryAlarmPersistanceModule;

          return{
            module: AlarmsInfrastructureModule,
            imports: [persistanceModule],
            exports: [persistanceModule]
          }
    }
}