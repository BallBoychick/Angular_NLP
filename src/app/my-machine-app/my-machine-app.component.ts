import { Component } from '@angular/core';
import { pipeline } from '@xenova/transformers';

@Component({
  selector: 'app-my-machine-app',
  standalone: true,
  imports: [],
  templateUrl: './my-machine-app.component.html',
  styleUrl: './my-machine-app.component.css'
})

export class MyMachineAppComponent {
  hero = 'Windstorm';
  predres = "";
  async predict() {
    this.predres = "No";

    let pipe = await pipeline('sentiment-analysis', "Xenova/distilbert-base-uncased-finetuned-sst-2-english");
    let output = await pipe('I love transformers!');
    console.log(output);
  }
}
function translator(arg0: string, arg1: {
  src_lang: string; // Hindi
  tgt_lang: string;
}) {
  throw new Error('Function not implemented.');
}

// Use a different model for sentiment-analysis
    // let pipe = await pipeline('translation', 'Xenova/nllb-200-distilled-600M');

    // let output = translator('जीवन एक चॉकलेट बॉक्स की तरह है।', {
    //   src_lang: 'hin_Deva', // Hindi
    //   tgt_lang: 'fra_Latn', // French
    // });