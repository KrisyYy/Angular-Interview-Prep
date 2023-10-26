import { Component, ViewChild } from '@angular/core';
import { UserListComponent } from '../../user-list/user-list.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  @ViewChild(UserListComponent) userList!: UserListComponent

  showEditModal: boolean = false;
  selectedUserId: string | undefined;
  
  displayEditModal(id: string) {
    this.selectedUserId = id;
    this.showEditModal = true;
  }

  closeEditModal(hasSubmitted: boolean) {
    this.showEditModal = false;
    if (hasSubmitted) {
      this.userList.getAllUsers();
    }
  }
}