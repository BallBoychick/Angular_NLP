import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyMachineAppComponent } from './my-machine-app/my-machine-app.component';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
declarations: [
    AppComponent,
    MyMachineAppComponent
],
  imports: [
    HttpClientModule,
    FormsModule,
    HttpClient,
    HttpClientModule
  ],
  // other module configurations
  providers: [ApiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }