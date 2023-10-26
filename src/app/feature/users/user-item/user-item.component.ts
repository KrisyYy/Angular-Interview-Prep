import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {

  @Input() user!: IUser;
  
  constructor (private router: Router, private userService: UserService) { }

  editModalHandler(id: string): void {
    this.userService.openCloseModal.emit(id);
  }

  editHandler(id: string, event: any): void {
    event.stopPropagation();
    this.router.navigate(['/edit', id])
  }

  deleteHandler(id: string, event: any): void {
    event.stopPropagation();
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.refreshUsers.emit();
    });
  }
}
