import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-edit-page',
  templateUrl: './create-edit-page.component.html',
  styleUrls: ['./create-edit-page.component.css']
})
export class CreateEditPageComponent implements OnInit {

  userId?: string;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  form: FormGroup = this.userService.userForm();

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    if (!!this.userId) {
      this.userService.getUserById(this.userId).subscribe(user => {
        if (!!user.id) {
          this.form.patchValue({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
            })
          }
          else {
            this.router.navigate(['/page-not-found']);
          }
        }
      )
    }
  }

  submitHandler() {
    if (!!this.userId) {
      this.userService.updateUser(this.userId!, this.form.value).subscribe(() => {
        this.router.navigate(['/'])
      })
    }
    else {
      this.userService.createUser(this.form.value).subscribe(() => {
        this.router.navigate(['/'])
      })
    }
  }

  showError(property: string): boolean {
    return this.form.controls[property].invalid && this.form.controls[property].touched;
  }

  isNotValid(property: string, validator: string): boolean {
    return this.form.controls[property].errors?.[validator];
  }
}
