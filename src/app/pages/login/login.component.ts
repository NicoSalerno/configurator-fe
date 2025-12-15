import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
protected FormSrv = inject(FormBuilder);

loginForm = this.FormSrv.group({
  username: ["", Validators.required],
  password: ["", Validators.required, Validators.minLength(8)]
})

submit(){
  console.log(this.loginForm)
}
}
