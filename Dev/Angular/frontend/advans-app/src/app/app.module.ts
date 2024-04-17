import { NgModule } from '@angular/core';
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
import { AddClientComponent } from './Components/Client/add-client/add-client.component';
import { OperationsComponent } from './Components/operations/operations.component';
import { ListClientsComponent } from './Components/Client/list-clients/list-clients.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ResetPasswordConfirmComponent } from './Components/reset-password-confirm/reset-password-confirm.component';

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListDemandesComponent,
    AddCreditComponent,
    AddClientComponent,
    OperationsComponent,
    ListClientsComponent,
    ResetPasswordComponent,
    ResetPasswordConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7258"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    provideClientHydration(),
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function withFetch(): import("@angular/common/http").HttpFeature<import("@angular/common/http").HttpFeatureKind> {
  throw new Error('Function not implemented.');
}

