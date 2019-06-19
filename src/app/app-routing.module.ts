import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GrasstypepageComponent } from './pages/grasstypepage/grasstypepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SpecificpageComponent } from './pages/specificpage/specificpage.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'grasstypes', component: GrasstypepageComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'specificpage', component: SpecificpageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
