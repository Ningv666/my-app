import { Component, ViewChild } from '@angular/core';
import { ListService } from '../service/list.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private listService: ListService) {}
  ngOnInit() {
    console.log(this.listService.list);
  }
  title: string = 'Tina';
  @ViewChild('son') child: any;
  addFun(params: any) {
    console.log(params);
  }
  onClick() {
    this.title = 'Jim';
  }
  toSon() {
    this.child.addStr();
  }
}
