import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { pipeline } from '@xenova/transformers';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-machine-app',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './my-machine-app.component.html',
  styleUrl: './my-machine-app.component.css'
})

export class MyMachineAppComponent {
  translation!: string;
  hero = 'Windstorm';
  sentence = "I love you";
  constructor(private http: HttpClient) { }
  message!: object;
  
  translateText() {
    const url = 'http://127.0.0.1:8000/translate';
    this.http.get(url, {}).subscribe((response) => {
      // Handle the response here
      console.log(response);
      this.message = response;
    });
  }

  sendSentence() {
    const apiUrl = 'http://127.0.0.1:8000';
    this.http.post(apiUrl, { sentence: this.sentence }).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}