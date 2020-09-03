import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      url:
        "postgres://ueczwmrr:d-mfTcYlrxCcjCKaAVLDWKR6IuUh5EZA@john.db.elephantsql.com:5432/ueczwmrr",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
