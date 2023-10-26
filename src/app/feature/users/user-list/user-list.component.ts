import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users!: IUser[];
  refresh?: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.refresh = this.userService.refreshUsers.subscribe(() => {
      this.getAllUsers();
    })
  }

  getAllUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users
    })
  }

  ngOnDestroy(): void {
    this.refresh?.unsubscribe();
  }
}