import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm = this.fb.group({
    login: this.fb.control('' as string | null, [Validators.required]),
    password: this.fb.control('' as string | null, [Validators.required]),
    birthYear: this.fb.control(null as number | null, [Validators.required])
  });

  constructor(private fb: FormBuilder) {}

  register() {}
}
