import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input() userId!: string;
  @Output() hideModal: EventEmitter<boolean> = new EventEmitter();

  constructor(private userService: UserService, private router: Router) { }

  editForm: FormGroup = this.userService.userForm();

  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.editForm.patchValue({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      })
    });
  }

  submitHandler() {
    this.userService.updateUser(this.userId, this.editForm.value)
    .subscribe(() => {
      this.hideModal.emit(true);
    })
  }

  closeModal() {
    this.hideModal.emit(false);
  }

  showError(property: string): boolean {
    return this.editForm.controls[property].invalid && this.editForm.controls[property].touched;
  }

  isNotValid(property: string, validator: string): boolean {
    return this.editForm.controls[property].errors?.[validator];
  }
}
