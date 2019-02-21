import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {
  DxAccordionModule,
  DxSelectBoxModule,
  DxMenuModule,
  DxTreeViewModule,
  DxTemplateModule,
  DxButtonModule
} from 'devextreme-angular';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule,
    AppRoutingModule,
    DxAccordionModule,
    DxSelectBoxModule,
    DxMenuModule,
    DxTreeViewModule,
    DxTemplateModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
