import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PricingComponent } from './componentes/pricing/pricing.component';
import { AboutComponent } from './componentes/about/about.component';
import { WhyusComponent } from './componentes/whyus/whyus.component';
import { PoliticsComponent } from './componentes/politics/politics.component';
import { EnviosComponent } from './componentes/politics/comps/envios/envios.component';
import { DevolucionesComponent } from './componentes/politics/comps/devoluciones/devoluciones.component';
import { PrivacidadComponent } from './componentes/politics/comps/privacidad/privacidad.component';
import { ServicioComponent } from './componentes/politics/comps/servicio/servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    PortfolioComponent,
    PricingComponent,
    AboutComponent,
    WhyusComponent,
    PoliticsComponent,
    EnviosComponent,
    DevolucionesComponent,
    PrivacidadComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
