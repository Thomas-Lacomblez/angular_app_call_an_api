import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

export class AppareilService {

  appareils = [
    { id: 1, name: 'Machine à laver', status: 'éteint' },
    { id: 2, name: 'Frigo', status: 'allumé' },
    { id: 3,name: 'Lave vaisselle', status: 'éteint' }
  ];
    
  getAppareilById(id: number) {
    const appareil = this.appareils.find( (appareilObject) =>{
      return appareilObject.id === id;
    });
    return appareil;
  }

  switchOnAll() {
    for(let appareil of this.appareils)
      appareil.status = 'allumé';
  }
  switchOffAll() {
    for(let appareil of this.appareils)
      appareil.status = 'éteint';
  }

  switchOneOn(index : number) {
    this.appareils[index].status = 'allumé';
  }

  switchOffOn(index : number) {
    this.appareils[index].status = 'éteint';
  }

  constructor() { }
}
