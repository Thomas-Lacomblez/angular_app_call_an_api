import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { ComptesComponent } from './comptes/comptes.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NewUserComponentComponent } from './new-user-component/new-user-component.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewCompteComponent } from './new-compte/new-compte.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth', component:AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponentComponent },
  { path: 'not-found', component: FourOhFourComponent},
  { path: 'comptes', component: ComptesComponent},
  { path: 'new-compte', component: NewCompteComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
