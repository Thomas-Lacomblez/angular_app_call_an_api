import { Injectable, OnDestroy } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Compte } from '../../models/compte.models';

import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CompteService {



  url = environment.apiUrl + "/testmicroservice";

  constructor(private http : HttpClient) { }


  get(url: string) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin':'*'
    });
    const options = { header: headers, withCredentials : false};
    return this.http.get<Compte>(url, options);
  }

  post(newCompte: Compte) {
    let url = this.url + "/comptes"
    return this.http.post<Compte>(url, newCompte );
  }


  addCompte(newCompte: Compte) {
    return new Promise ((resolve, reject) => {  

      let url = this.url + '/comptes';

      this.post(newCompte)
      .subscribe( (data: Compte) => {
        console.log(data);
        let tmpCompte : Compte = new Compte( data['id'],
                                            data['solde'],
                                            data['dateCreation'],
                                            data['type'] );
        resolve(tmpCompte);
        return tmpCompte;
      });
    });
  }

  getAllCompte() : Promise<Array<Compte>>{
    return new Promise ((resolve, reject) => {  

      let listCompte : Array<Compte> = new Array<Compte>();
      let url = this.url + '/comptes';

      this.http.get<Array<Compte>>(url)
        .subscribe( (data: Array<Compte>) => {
        console.log(data);
        
        data.forEach( compte => {
          let tmpCompte : Compte = new Compte( compte['id'],
                                              compte['solde'],
                                              compte['dateCreation'],
                                              compte['type'] );
          listCompte.push(tmpCompte);
        });
        resolve(listCompte);
        return listCompte;
      });
    });
  }

}
