import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlarmsModule } from './alarms/application/alarms.module';
import { CoreModule } from './core/core.module';
import { ApplicationBootstrapInterfaces } from './common/interfaces/application-bootstrap-options';
import { AlarmsInfrastructureModule } from './alarms/infrastructure/alarms-infrastructure-module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [ CqrsModule.forRoot(),CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static register(options: ApplicationBootstrapInterfaces){
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        AlarmsModule.withinInfrastructure(AlarmsInfrastructureModule.use(options.driver)),
      ],
    }
  }
}
