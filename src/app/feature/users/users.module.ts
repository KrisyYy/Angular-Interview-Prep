import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateEditPageComponent } from './pages/create-edit-page/create-edit-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    CreateEditPageComponent,
    UserListComponent,
    EditModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
