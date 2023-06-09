import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AHelloComponent } from './a-hello/a-hello.component';
const routes: Routes = [
  {
    path: 'home/:name',
    component: HomeComponent,
    children: [{ path: 'hello', component: AHelloComponent }],
  },
  { path: 'hello', component: AHelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
