import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil/appareil.service';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() indexOfAppareil!: number;
  property1 = "property1";
  constructor(private appareilService : AppareilService) {}

  ngOnInit() {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus == 'allumé') return 'green';
    else if (this.appareilStatus == 'éteint') return 'red';
    else {
      return 'grey';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOneOn( this.indexOfAppareil );
  }

  onSwitchOff() {
    this.appareilService.switchOffOn( this.indexOfAppareil );
  }
}
