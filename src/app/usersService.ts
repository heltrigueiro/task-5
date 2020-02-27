import {CounterOperationsServices} from './counter-operations-services';
import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  countService = new CounterOperationsServices();

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countService.incrementTimesActiveToInactive();
  }
  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countService.incrementTimesInactiveToActive();
  }
}
