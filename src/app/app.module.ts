import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SpecificpageComponent } from './pages/specificpage/specificpage.component';
import { GrasstypepageComponent } from './pages/grasstypepage/grasstypepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { FetchapiService } from './services/fetchapi.service';
import { SharedataService } from './services/sharedata.service';
import { PokemoncardComponent } from './components/pokemoncard/pokemoncard.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { ReadmoreComponent } from './components/readmore/readmore.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SpecificpageComponent,
    GrasstypepageComponent,
    ContactpageComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    PagenotfoundComponent,
    PokemoncardComponent,
    SearchbarComponent,
    TypeaheadComponent,
    ReadmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxTypeaheadModule,
  ],
  providers: [
    FetchapiService,
    SharedataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
