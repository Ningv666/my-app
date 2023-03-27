import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
})
export class FormTableComponent {
  date = new Date();
  name: string = 'Tina';
  score: number = 100.6;
  str: string = 'abcdefghij';
  
  a: number = 0.259;

  //构造函数里注入FormBuilder
  constructor(private fb: FormBuilder) {}
  // 添加表单验证要素
  validForm: FormGroup = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.maxLength(18), Validators.minLength(6)],
    ],
    password: ['', [this.passWordVal]],
    phone: ['', [Validators.required, this.phoneVal]],
  });
  // 手机号验证函数
  phoneVal(phone: FormControl): object {
    const value = phone.value || '';
    if (!value) return { desc: '请输入手机号' };
    const valid = /[0-9]{11}/.test(value);
    return valid ? {} : { desc: '联系电话必须是11位数字' };
  }
  // 密码验证函数
  passWordVal(password: FormControl): object {
    const value = password.value || '';
    const valid = value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/);
    return valid
      ? {}
      : { passwordValidator: { desc: '密码至少包含 数字和英文，长度6-20' } };
  }
  // 提交函数
  onSubmit() {
    console.log('this.validForm>>>', this.validForm.value);
  }
}
