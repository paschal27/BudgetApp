import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { iBudget } from '../Ibudget';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public signupForm: FormGroup = new FormGroup ({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private accountService: AccountService) { }

  createUser() {
    this.accountService.addUser(this.signupForm.value).subscribe(res => {

    })
  }

}
