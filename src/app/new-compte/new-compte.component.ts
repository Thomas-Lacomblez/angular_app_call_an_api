import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from '../models/compte.models';
import { CompteService } from '../services/compte/compte.service';

@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrls: ['./new-compte.component.scss']
})
export class NewCompteComponent implements OnInit {

  compteForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private CompteService: CompteService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.compteForm = this.formBuilder.group( {
      id: new FormControl({value: '', disabled: true}, [Validators.required,  Validators.pattern("^[0-9]*$") ]),
      solde: ['', [Validators.required,  Validators.pattern("^[0-9]*$") ]],
      dateCreation: ['', Validators.required ],
      type: ['', Validators.required]
    })
  }

  onSubmitForm() {
    const formValue = this.compteForm.value;
    const newCompte = new Compte(
      formValue['id'],
      formValue['solde'],
      formValue['dateCreation'],
      formValue['type']
    );
    this.CompteService.addCompte(newCompte);
    this.router.navigate( ['/comptes'] );
  }
}
