import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AHelloComponent } from './a-hello/a-hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTableComponent } from './form-table/form-table.component';
import { TestPipe } from './test.pipe';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './home/home.component';
import { ListService } from './service/list.service';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EchartDemoComponent } from './echart-demo/echart-demo.component';
import { DragDemoComponent } from './drag-demo/drag-demo.component';
import { SpotEchartComponent } from './spot-echart/spot-echart.component';
@NgModule({
  declarations: [
    AppComponent,
    AHelloComponent,
    FormTableComponent,
    TestPipe,
    TitleComponent,
    HomeComponent,
    MenuComponent,
    EchartDemoComponent,
    DragDemoComponent,
    SpotEchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
