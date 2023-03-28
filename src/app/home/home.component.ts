import { Component, ViewChild } from '@angular/core';
import { ListService } from '../service/list.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  name: string = '';
  constructor(
    private listService: ListService,
    private routerinfo: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log(this.listService.list);
    this.routerinfo.params.subscribe((params: Params) => {
      this.name = params['name'];
    });
    console.log(this.name);
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
