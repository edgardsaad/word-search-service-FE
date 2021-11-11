import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SimilarityService } from './services/similarity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@ViewChild('searchForm') searchForm: NgForm;
  title = 'words-similarities';
  wfrequency: number =0;
  wsimilarity: string ="";
  

  constructor(private similarityService: SimilarityService) { }

  ngOnInit() {
      
  }

  searchWord(word: string, notebook: string){
    //console.log(this.searchForm);

    this.similarityService.sendGetRequest(word,notebook).subscribe((data: any[])=>{
      console.log(data);
      this.wfrequency= (data as any).frequency;
      this.wsimilarity= (data as any).similarities;
    })
  }

}
