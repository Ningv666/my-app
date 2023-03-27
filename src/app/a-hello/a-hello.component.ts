import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-a-hello',
  templateUrl: './a-hello.component.html',
  styleUrls: ['./a-hello.component.scss'],
})
export class AHelloComponent {
  box: string = 'myBox';
  isFlag: boolean = true;
  isExist: boolean = false;

  title = '';

  color: Array<string> = ['red', 'blue', 'yellow', 'green'];

  type: number = 1;

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  onClick = (value: any) => {
    console.log('value>>>', value);
  };
  onChange(e: any) {
    console.log(e.target.value);
  }
  onSubmit() {
    console.log(this.loginForm.value);
  }
}
