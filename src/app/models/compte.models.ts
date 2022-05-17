import { Injectable } from "@angular/core";


export class Compte {
    public id : number;
    public solde : number;
    public dateCreation : Date;
    public type : string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getSolde(): number {
        return this.solde;
    }

    public setSolde(solde: number): void {
        this.solde = solde;
    }

    public getDateCreation(): Date {
        return this.dateCreation;
    }

    public setDateCreation(dateCreation: Date): void {
        this.dateCreation = dateCreation;
    }

    public getType(): string {
        return this.type;
    }

    public setType(typeCompte: string): void {
        this.type = typeCompte;
    }


    constructor(id : number, solde : number, dateCreation : Date, type : string) { 
        this.id = id;
        this.solde = solde;
        this.dateCreation = dateCreation;
        this.type = type;
    }

    
}