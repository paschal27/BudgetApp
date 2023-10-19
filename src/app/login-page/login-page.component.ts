import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public loginForm: FormGroup = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(form: NgForm) {
    console.log(form)
  }

}

