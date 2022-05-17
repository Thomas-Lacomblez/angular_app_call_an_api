import { Component, OnDestroy, OnInit } from '@angular/core';
import { CompteService } from '../services/compte/compte.service';
import { Compte } from "../models/compte.models"
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.scss']
})
export class ComptesComponent implements OnInit {

  userForm!: FormGroup;
  comptes: Array<Compte> = new Array<Compte>();

  constructor(private CompteService: CompteService, private router: Router) { }

  async ngOnInit() {
    this.comptes = await this.CompteService.getAllCompte();
   
  }

}
