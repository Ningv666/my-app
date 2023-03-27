import { Injectable } from '@angular/core';

@Injectable({
    //作用域设定，'root'表示默认注入，注入到AppModule里
  providedIn: 'root',
})
export class ListService {
  constructor() {}
  list :Array<string> = ['1','2','3']
}
