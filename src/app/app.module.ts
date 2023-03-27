import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AHelloComponent } from './a-hello/a-hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTableComponent } from './form-table/form-table.component';
import { TestPipe } from './test.pipe';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './home/home.component';
import { ListService } from './service/list.service';
@NgModule({
  declarations: [
    AppComponent,
    AHelloComponent,
    FormTableComponent,
    TestPipe,
    TitleComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
