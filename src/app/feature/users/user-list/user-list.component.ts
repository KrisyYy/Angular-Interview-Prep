import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: IUser[];

  @Output() modalEditUser: EventEmitter<string> = new EventEmitter();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users
    })
  }

  editModalHandler(id: string): void {
    this.modalEditUser.emit(id);
  }

  editHandler(id: string, event: any): void {
    event.stopPropagation();
    this.router.navigate(['/edit', id])
  }

  deleteHandler(id: string, event: any): void {
    event.stopPropagation();
    this.userService.deleteUser(id)
    .subscribe(() => {
      this.getAllUsers();
    });
  }
}