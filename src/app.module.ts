import { Team } from './team.entity';
import { User } from './user.entity';
import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ciqu',
      database: 'user',
      entities: [Team, User],
      synchronize: true,
    }),
    HttpModule.register({
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE4OCwidXNlcm5hbWUiOiJRUzQwNSIsImlhdCI6MTYwNzY3OTAxNSwiZXhwIjoxNjA3Njc5NjE1fQ.7okUxXSTisw2E2ZKwW1rFqe1mlHC7Yu9TOcuG239KmI',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
