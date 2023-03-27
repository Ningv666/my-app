import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input()
  title?: string;
  @Output() add = new EventEmitter();
  addStr() {
    this.add.emit('666');
  }
  ngOnInit() {
    console.log('this is ngOnInit');
  }
  ngOnChanges() {
    console.log(this.title, 'this is ngOnChanges');
  }
  // ngDoCheck() {
  //   console.log('this is ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('this is ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('this is ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('this is ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('this is ngAfterViewChecked');
  // }
  ngOnDestroy() {
    console.log('this is ngOnDestroy');
  }
}
