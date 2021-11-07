import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimilarityService {

  private REST_API_SERVER = "http://localhost:9095/WordSearchService/ProcessText";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(wordtosearch: string, notebookentry: string){
    const params = new HttpParams()
    .set('word', wordtosearch)
    .set('text', notebookentry);
    const options = { params: params };
    return this.httpClient.get(this.REST_API_SERVER, options);
  }
}