import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { ListDemandesComponent } from './Components/list-demandes/list-demandes.component';
import { AuthGuard } from './guards/auth.guard';
import { AddCreditComponent } from './Components/add-credit/add-credit.component';
import { OperationsComponent } from './Components/operations/operations.component';
import { AddClientComponent } from './Components/Client/add-client/add-client.component';
import { ListClientsComponent } from './Components/Client/list-clients/list-clients.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ResetPasswordConfirmComponent } from './Components/reset-password-confirm/reset-password-confirm.component';



const routes: Routes = [
  {path:'' , component:AccueilComponent},
  {path:'accueil' , component:AccueilComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'reset-password-confirm', component:ResetPasswordConfirmComponent},
  {path:'add-credit', component:AddCreditComponent , canActivate: [AuthGuard]},
  {path : 'list' , component:ListDemandesComponent , canActivate: [AuthGuard]},
  {path : 'operations/:id' , component:OperationsComponent , canActivate: [AuthGuard]},
  {path:'add-client', component:AddClientComponent , canActivate: [AuthGuard]},
  {path:'list-client', component:ListClientsComponent , canActivate: [AuthGuard]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
