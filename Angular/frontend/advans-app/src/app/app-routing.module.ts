import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { ListDemandesComponent } from './Components/list-demandes/list-demandes.component';
import { AuthGuard } from './guards/auth.guard';
import { AddCreditComponent } from './Components/add-credit/add-credit.component';
import { OperationsComponent } from './Components/operations/operations.component';

import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ResetPasswordConfirmComponent } from './Components/reset-password-confirm/reset-password-confirm.component';
import { ListClientsComponent } from './Components/Client/list-clients/list-clients.component';
import { EditClientComponent } from './Components/Client/edit-client/edit-client.component';
import { EditClientEntrepriseComponent } from './Components/Client/edit-client-entreprise/edit-client-entreprise.component';
import { AddClientParticulierComponent } from './Components/Client/add-client-particulier/add-client-particulier.component';
import { AddClientEntrepriseComponent } from './Components/Client/add-client-entreprise/add-client-entreprise.component';
import { NavComponent } from './Components/nav/nav.component';
import { MapsComponent } from './Components/maps/maps.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { ParametresComponent } from './Components/parametres/parametres.component';
import { AnalyseComponent } from './Components/analyse/analyse.component';
import { ChecklistComponent } from './Components/checklist/checklist.component';
import { RisqueAnalyseComponent } from './Components/risque-analyse/risque-analyse.component';
import { ComiteComponent } from './Components/comite/comite.component';
import { VisiteManagementComponent } from './Components/visite-management/visite-management.component';
import { RechercheClientComponent } from './Components/recherche-client/recherche-client.component';
import { GarantgarantieDemandeComponent } from './Components/garantgarantie-demande/garantgarantie-demande.component';
import { EditGarantComponent } from './Components/edit-garant/edit-garant.component';
import { EditGarantieComponent } from './Components/edit-garantie/edit-garantie.component';
import { TabsclientparticulierComponent } from './Components/tabsclientparticulier/tabsclientparticulier.component';
import { EditReffamilComponent } from './Components/edit-reffamil/edit-reffamil.component';
import { EditCptebancpartComponent } from './Components/edit-cptebancpart/edit-cptebancpart.component';
import { EditCreditrecentpartComponent } from './Components/edit-creditrecentpart/edit-creditrecentpart.component';
import { EditCptepartComponent } from './Components/edit-cptepart/edit-cptepart.component';
import { TabscliententrepriseComponent } from './Components/tabscliententreprise/tabscliententreprise.component';
import { EditApprovisionnementComponent } from './Components/edit-approvisionnement/edit-approvisionnement.component';
import { EditCompteBancaireEntrepriseComponent } from './Components/edit-compte-bancaire-entreprise/edit-compte-bancaire-entreprise.component';
import { EditCompteEntrepriseComponent } from './Components/edit-compte-entreprise/edit-compte-entreprise.component';
import { EditCreditRecentEntrepriseComponent } from './Components/edit-credit-recent-entreprise/edit-credit-recent-entreprise.component';
import { EditDepensesComponent } from './Components/edit-depenses/edit-depenses.component';
import { EditPointVenteComponent } from './Components/edit-point-vente/edit-point-vente.component';
import { EditVenteComponent } from './Components/edit-vente/edit-vente.component';
import { InterDecideurComiteComponent } from './Components/inter-decideur-comite/inter-decideur-comite.component';
import { EditAnalyseComponent } from './Components/edit-analyse/edit-analyse.component';
import { EditchecklistComponent } from './Components/editchecklist/editchecklist.component';
import { EditRAComponent } from './Components/edit-ra/edit-ra.component';
import { EditComiteComponent } from './Components/edit-comite/edit-comite.component';
import { EditVisitemanagementComponent } from './Components/edit-visitemanagement/edit-visitemanagement.component';
import { EditInterDecideurComiteComponent } from './Components/edit-inter-decideur-comite/edit-inter-decideur-comite.component';
import { DashboardClientsComponent } from './Components/dashboard-clients/dashboard-clients.component';
import { DashboardClientsEntrepriseComponent } from './Components/dashboard-clients-entreprise/dashboard-clients-entreprise.component';
import { InformationsProcessusComponent } from './Components/informations-processus/informations-processus.component';
import { EditProduitComponent } from './Components/edit-produit/edit-produit.component';
import { AgencesComponent } from './Components/agences/agences.component';
import { EditAgenceComponent } from './Components/edit-agence/edit-agence.component';
import { ListClientsParticuliersComponent } from './Components/list-clients-particuliers/list-clients-particuliers.component';
import { DashboardOperationsComponent } from './Components/dashboard-operations/dashboard-operations.component';
import { GarantiegarantDemandeComponent } from './Components/garantiegarant-demande/garantiegarant-demande.component';
import { addClientsGuard } from './guards/add-clients.guard';
import { adminGuard } from './guards/admin.guard';
import { chafAgenceGuard } from './guards/chaf-agence.guard';




const routes: Routes = [
  {path:'' , component:AccueilComponent},
  {path:'accueil' , component:AccueilComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'reset-password-confirm', component:ResetPasswordConfirmComponent},
  {path : 'list' , component:ListDemandesComponent , canActivate: [AuthGuard]},
  {path : 'edit-client/:id' , component:EditClientComponent , canActivate: [AuthGuard]},
  {path : 'edit-clientEntreprise/:id' , component:EditClientEntrepriseComponent , canActivate: [AuthGuard]},
  
  {path : 'nav' , component:NavComponent , canActivate: [AuthGuard], 
    children: [
      { path: 'list', component:ListDemandesComponent , canActivate: [AuthGuard]},
      { path: 'linktoprocess/:id', component:InformationsProcessusComponent , canActivate: [AuthGuard, chafAgenceGuard]},
      {path:'add-credit', component:AddCreditComponent , canActivate: [AuthGuard, addClientsGuard]},
      {path:'add-garant', component:GarantgarantieDemandeComponent , canActivate: [AuthGuard]},
      {path:'add-garantie', component:GarantiegarantDemandeComponent , canActivate: [AuthGuard]},
      {path:'add-tabsparticulier', component:TabsclientparticulierComponent , canActivate: [AuthGuard, addClientsGuard]},
      {path:'add-tabsentreprise', component:TabscliententrepriseComponent , canActivate: [AuthGuard, addClientsGuard]},

      {path:'edit-approvisionnement/:id', component:EditApprovisionnementComponent , canActivate: [AuthGuard]},
      {path:'edit-comptebancaireentreprise/:id', component:EditCompteBancaireEntrepriseComponent , canActivate: [AuthGuard]},
      {path:'edit-compteentreprise/:id', component:EditCompteEntrepriseComponent , canActivate: [AuthGuard]},
      {path:'edit-creditrecententreprise/:id', component:EditCreditRecentEntrepriseComponent , canActivate: [AuthGuard]},
      {path:'edit-depenses/:id', component:EditDepensesComponent , canActivate: [AuthGuard]},
      {path:'edit-pointvente/:id', component:EditPointVenteComponent , canActivate: [AuthGuard]},
      {path:'edit-vente/:id', component:EditVenteComponent , canActivate: [AuthGuard]},

      {path:'edit-garant/:id', component:EditGarantComponent , canActivate: [AuthGuard]},
      {path:'edit-garantie/:id', component:EditGarantieComponent , canActivate: [AuthGuard]},
      {path:'edit-reffamil/:id', component:EditReffamilComponent , canActivate: [AuthGuard]},
      {path:'edit-cmptebancpart/:id', component:EditCptebancpartComponent , canActivate: [AuthGuard]},
      {path:'edit-creditrecentpart/:id', component:EditCreditrecentpartComponent , canActivate: [AuthGuard]},
      {path:'edit-comptepart/:id', component:EditCptepartComponent , canActivate: [AuthGuard]},
      {path:'recherche-client', component:RechercheClientComponent , canActivate: [AuthGuard]},
      { path: 'maps', component:MapsComponent , canActivate: [AuthGuard]},
      { path: 'dashboard-Credits', component:DashboardComponent , canActivate: [AuthGuard, adminGuard]},
      { path: 'dashboard-ClientsParticuliers', component:DashboardClientsComponent , canActivate: [AuthGuard, adminGuard]},
      { path: 'dashboard-ClientsEntreprise', component:DashboardClientsEntrepriseComponent , canActivate: [AuthGuard, adminGuard]},
      { path: 'dashboard-Operations', component:DashboardOperationsComponent , canActivate: [AuthGuard, adminGuard]},
      { path: 'notifications', component:NotificationsComponent , canActivate: [AuthGuard]},
      { path: 'parametres', component:ParametresComponent , canActivate: [AuthGuard, adminGuard]},
      { path: 'edit-produit', component:EditProduitComponent , canActivate: [AuthGuard]},
      { path: 'agences', component:AgencesComponent , canActivate: [AuthGuard]},
      { path: 'edit-agence', component:EditAgenceComponent , canActivate: [AuthGuard]},
      { path: 'clients-entreprise', component:ListClientsComponent , canActivate: [AuthGuard]},
      { path: 'clients-particuliers', component:ListClientsParticuliersComponent , canActivate: [AuthGuard]},
      {path:'add-client-entreprise', component:AddClientEntrepriseComponent , canActivate: [AuthGuard, addClientsGuard]},
      {path:'add-client-particulier', component:AddClientParticulierComponent , canActivate: [AuthGuard, addClientsGuard]},
      {path : 'edit-client/:id' , component:EditClientComponent , canActivate: [AuthGuard]},
      {path : 'edit-clientEntreprise/:id' , component:EditClientEntrepriseComponent , canActivate: [AuthGuard]},
      // {path : 'operations/:id' , component:OperationsComponent , canActivate: [AuthGuard]},
      {path : 'analyse/:id' , component:AnalyseComponent , canActivate: [AuthGuard]},
      {path : 'edit-analyse/:id' , component:EditAnalyseComponent , canActivate: [AuthGuard]},
      {path : 'checklist/:id' , component:ChecklistComponent , canActivate: [AuthGuard]},
      {path : 'edit-checklist/:id' , component:EditchecklistComponent , canActivate: [AuthGuard]},
      {path : 'risqueAnalyse/:id' , component:RisqueAnalyseComponent , canActivate: [AuthGuard]},
      {path : 'edit-risqueAnalyse/:id' , component:EditRAComponent , canActivate: [AuthGuard]},
      {path : 'comite/:id' , component:ComiteComponent , canActivate: [AuthGuard, chafAgenceGuard]},
      {path : 'edit-comite/:id' , component:EditComiteComponent , canActivate: [AuthGuard]},
      {path : 'inter-decideur-comite/:id' , component:InterDecideurComiteComponent , canActivate: [AuthGuard]},
      {path : 'edit-inter-decideur-comite/:id' , component:EditInterDecideurComiteComponent , canActivate: [AuthGuard]},
      {path : 'visiteManagement/:id' , component:VisiteManagementComponent , canActivate: [AuthGuard]},
      {path : 'edit-visiteManagement/:id' , component:EditVisitemanagementComponent , canActivate: [AuthGuard]}
      
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
