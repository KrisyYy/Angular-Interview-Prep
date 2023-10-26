import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy{

  showEditModal: boolean = false;
  userId: string | undefined;
  modalSubscription?: Subscription;
  
  constructor (private userService: UserService) { }

  ngOnInit(): void {
    this.modalSubscription = this.userService.openCloseModal.subscribe(value => {
      if (!!value) {
        this.showEditModal = true;
        this.userId = value;
      }
      else {
        this.showEditModal = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.modalSubscription?.unsubscribe();
  }
}