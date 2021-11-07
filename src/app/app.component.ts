import { Component } from '@angular/core';
import { SimilarityService } from './services/similarity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'words-similarities';
  wfrequency: number =0;
  wsimilarity: string ="";
  //freq:number =0;
  //sim:string ="";
 // products: {freq, sim};

  constructor(private similarityService: SimilarityService) { }

  ngOnInit() {

    this.similarityService.sendGetRequest("wor","word woo wor wor Wor").subscribe((data: any[])=>{
      console.log(data);
      this.wfrequency= (data as any).frequency;
      this.wsimilarity= (data as any).similarities;
      //this.products.freq = (data as any).frequency;
      //this.products.sim = (data as any).similarities;
    })  
  }
}
