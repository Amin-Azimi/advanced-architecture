import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationBootstrapInterfaces } from 'src/common/interfaces/application-bootstrap-options';

@Module({})
export class CoreModule {
    static forRoot(option : ApplicationBootstrapInterfaces){
        const imports = option.driver === 'orm'
        ?[
            TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                password: 'finverity',
                username: 'finverity',
                autoLoadEntities: true,
                synchronize: true
            })
        ]: []

        return{
            module: CoreModule,
            imports
        }
    }
}
