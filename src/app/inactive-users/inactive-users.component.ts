import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../usersService';
import {CounterOperationsServices} from '../counter-operations-services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  constructor(private userService: UsersService) {
  }
  onSetToActive(id: number) {
    this.userService.setActive(id);
  }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }
}
