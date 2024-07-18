import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { ListDemandesComponent } from './Components/list-demandes/list-demandes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavComponent } from './Components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { MapsComponent } from './Components/maps/maps.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
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
import { EditCptepartComponent } from './Components/edit-cptepart/edit-cptepart.component';
import { EditCreditrecentpartComponent } from './Components/edit-creditrecentpart/edit-creditrecentpart.component';
import { TabscliententrepriseComponent } from './Components/tabscliententreprise/tabscliententreprise.component';
import { EditCompteEntrepriseComponent } from './Components/edit-compte-entreprise/edit-compte-entreprise.component';
import { EditDepensesComponent } from './Components/edit-depenses/edit-depenses.component';
import { EditCompteBancaireEntrepriseComponent } from './Components/edit-compte-bancaire-entreprise/edit-compte-bancaire-entreprise.component';
import { EditPointVenteComponent } from './Components/edit-point-vente/edit-point-vente.component';
import { EditCreditRecentEntrepriseComponent } from './Components/edit-credit-recent-entreprise/edit-credit-recent-entreprise.component';
import { EditVenteComponent } from './Components/edit-vente/edit-vente.component';
import { EditApprovisionnementComponent } from './Components/edit-approvisionnement/edit-approvisionnement.component';
import { InterDecideurComiteComponent } from './Components/inter-decideur-comite/inter-decideur-comite.component';
import { EditAnalyseComponent } from './Components/edit-analyse/edit-analyse.component';
import { EditchecklistComponent } from './Components/editchecklist/editchecklist.component';
import { EditRAComponent } from './Components/edit-ra/edit-ra.component';
import { EditComiteComponent } from './Components/edit-comite/edit-comite.component';
import { EditVisitemanagementComponent } from './Components/edit-visitemanagement/edit-visitemanagement.component';
import { EditInterDecideurComiteComponent } from './Components/edit-inter-decideur-comite/edit-inter-decideur-comite.component';
import {MatTableModule} from '@angular/material/table';
import { PageEvent,MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { DashboardClientsComponent } from './Components/dashboard-clients/dashboard-clients.component';
import { DashboardClientsEntrepriseComponent } from './Components/dashboard-clients-entreprise/dashboard-clients-entreprise.component';
import { InformationsProcessusComponent } from './Components/informations-processus/informations-processus.component';
import { EditProduitComponent } from './Components/edit-produit/edit-produit.component';
import { AgencesComponent } from './Components/agences/agences.component';
import { EditAgenceComponent } from './Components/edit-agence/edit-agence.component';
import { ListClientsParticuliersComponent } from './Components/list-clients-particuliers/list-clients-particuliers.component';
import { DashboardOperationsComponent } from './Components/dashboard-operations/dashboard-operations.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { GarantiegarantDemandeComponent } from './Components/garantiegarant-demande/garantiegarant-demande.component';
import { MatSelectModule } from '@angular/material/select'; // Importez MatSelectModule
import { MatDialogModule } from '@angular/material/dialog';
import { ClientDialogComponentComponent } from './Components/client-dialog-component/client-dialog-component.component';
import { ConfirmDeletePartDialogComponentComponent } from './Components/confirm-delete-part-dialog-component/confirm-delete-part-dialog-component.component';
import { ConfirmDeleteEntreDialogComponent } from './Components/confirm-delete-entre-dialog/confirm-delete-entre-dialog.component';
import { ConfirmDeleteAgenceDialogComponent } from './Components/confirm-delete-agence-dialog/confirm-delete-agence-dialog.component';
import { ConfirmDeleteProduitDialogComponent } from './Components/confirm-delete-produit-dialog/confirm-delete-produit-dialog.component';
import { OperationsDialogComponent } from './Components/operations-dialog/operations-dialog.component';




export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListDemandesComponent,
    AddCreditComponent,
    OperationsComponent,
    
    ResetPasswordComponent,
    ResetPasswordConfirmComponent,
    ListClientsComponent,
    EditClientComponent,
    EditClientEntrepriseComponent,
    AddClientParticulierComponent,
    AddClientEntrepriseComponent,
    SidebarComponent,
    NavbarComponent,
    NavComponent,
    NotificationsComponent,
    MapsComponent,
    DashboardComponent,
    ParametresComponent,
    AnalyseComponent,
    ChecklistComponent,
    RisqueAnalyseComponent,
    ComiteComponent,
    VisiteManagementComponent,
    RechercheClientComponent,
    GarantgarantieDemandeComponent,
    EditGarantComponent,
    EditGarantieComponent,
    TabsclientparticulierComponent,
    EditReffamilComponent,
    EditCptebancpartComponent,
    EditCptepartComponent,
    EditCreditrecentpartComponent,
    TabscliententrepriseComponent,
    EditCompteEntrepriseComponent,
    EditDepensesComponent,
    EditCompteBancaireEntrepriseComponent,
    EditPointVenteComponent,
    EditCreditRecentEntrepriseComponent,
    EditVenteComponent,
    EditApprovisionnementComponent,
    InterDecideurComiteComponent,
    EditAnalyseComponent,
    EditchecklistComponent,
    EditRAComponent,
    EditComiteComponent,
    EditVisitemanagementComponent,
    EditInterDecideurComiteComponent,
    DashboardClientsComponent,
    DashboardClientsEntrepriseComponent,
    InformationsProcessusComponent,
    EditProduitComponent,
    AgencesComponent,
    EditAgenceComponent,
    ListClientsParticuliersComponent,
    DashboardOperationsComponent,
    GarantiegarantDemandeComponent,
    ClientDialogComponentComponent,
    ConfirmDeletePartDialogComponentComponent,
    ConfirmDeleteEntreDialogComponent,
    ConfirmDeleteAgenceDialogComponent,
    ConfirmDeleteProduitDialogComponent,
    OperationsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatExpansionModule,
    BaseChartDirective,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7258"],
        disallowedRoutes: []
      }
    }),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    provideClientHydration(),
    AuthGuard,
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function withFetch(): import("@angular/common/http").HttpFeature<import("@angular/common/http").HttpFeatureKind> {
  throw new Error('Function not implemented.');
}

