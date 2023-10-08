import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AHelloComponent } from './a-hello/a-hello.component';
import { MenuComponent } from './menu/menu.component';
import { EchartDemoComponent } from './echart-demo/echart-demo.component';
import { DragDemoComponent } from './drag-demo/drag-demo.component';
import { SpotEchartComponent } from './spot-echart/spot-echart.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'home/:name',
    component: HomeComponent,
    children: [{ path: 'hello', component: AHelloComponent }],
  },
  { path: 'hello', component: AHelloComponent },
  { path: 'echarts', component: EchartDemoComponent },
  { path: 'drag', component: DragDemoComponent },
  { path: 'spotEcharts', component: SpotEchartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
