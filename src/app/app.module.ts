import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { ConfiguratorComponent } from './pages/configurator/configurator.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckOutComponent } from './pages/check-out/check-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChoiceComponent,
    ConfiguratorComponent,
    CardComponent,
    NavbarComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
