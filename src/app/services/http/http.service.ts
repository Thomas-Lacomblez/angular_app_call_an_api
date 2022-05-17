import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from '@angular/core';
import { environment } from '../../../environments/environment';

export class HttpService {

  constructor(private http : HttpClient) { }

  post(serviceName: string, data: any) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
    });
    const options = { header: headers, withCredentials : false};
    const url = environment.apiUrl + serviceName;

    console.log("JSON.stringify(data) : "  + JSON.stringify(data) );
    
    return this.http.post(url, data, options);
  }

  get(url: string) {
    return this.http.get(url);
  }
}
