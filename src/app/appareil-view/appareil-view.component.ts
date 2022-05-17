import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;

  appareils!: any[];

  lastUpdate = new Promise<Date>( (resolve, reject) => {
    const date = new Date();
    setTimeout( () => {
      resolve(date);
    }, 2000)
  });

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }

}
