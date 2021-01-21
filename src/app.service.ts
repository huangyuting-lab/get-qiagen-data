import { User } from './user.entity';
import { Team } from './team.entity';
import { USER_DOMAIN_API_V1 } from './configs';
import { HttpService, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  async getData() {
    const teams: any[] = (
      await this.httpService.get(`${USER_DOMAIN_API_V1}/teams`).toPromise()
    ).data.data;
    const users: any[] = (
      await this.httpService.get(`${USER_DOMAIN_API_V1}/users`).toPromise()
    ).data.data;
    await Promise.all(
      teams.map(async team => {
        const { id, num, name, isRoot, isActive } = team;
        const newTeam = { id, num, name, isRoot, isActive };
        await getRepository(Team).save(newTeam);
      }),
    );
    await Promise.all(
      users.map(async user => {
        const { id, username, password, name, position, isActive } = user;
        const newUser = { id, username, password, name, position, isActive };
        await getRepository(User).save(newUser);
      }),
    );
  }
}
