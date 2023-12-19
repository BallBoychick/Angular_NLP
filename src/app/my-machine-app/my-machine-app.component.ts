import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { pipeline } from '@xenova/transformers';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-my-machine-app',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './my-machine-app.component.html',
  styleUrl: './my-machine-app.component.css'
})

export class MyMachineAppComponent {
  translation!: string;
  hero = 'Windstorm';
  sentence: string = '';
  constructor(private http: HttpClient) { }
  message!: object;
  
  sendSentence() {
    const apiUrl = 'http://127.0.0.1:8000/fr';
    this.http.post(apiUrl, { sentence: this.sentence }).subscribe(
      (response: any) => {
        this.translation = response;
        console.log(response);
      }
    );
  }
  // sendSentence() {
  //   const apiUrl = 'http://127.0.0.1:8000/fr';
  //   this.http.post(apiUrl, { sentence: this.sentence }).subscribe(
  //     (response) => {
  //       console.log(response);
  //     }
  //   );
  // }
}
// translateText() {
      //   const url = 'http://127.0.0.1:8000/translate';
      //   this.http.get(url, {}).subscribe((response) => {
      //     // Handle the response here
      //     console.log(response);
      //     this.message = response;
      //   });
      // }

      // this.http.get(apiUrl, {}).subscribe((response) => {
        //   // Handle the response here
        //   console.log(response);
      //   this.message = response;
      // });