import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";
import { AppModule, AppComponent } from "./app.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [ServerModule, NoopAnimationsModule, AppModule],
  bootstrap: [AppComponent],
  providers: []
})
export class AppServerModule {}
