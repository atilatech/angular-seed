import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core"

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppModule } from "./app.module";

@NgModule({
  declarations: [
  ],
  imports: [
    AppModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }