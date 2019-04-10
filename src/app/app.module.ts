import { HomeComponent } from './components/home/home.component';
import { WebComponent } from './components/web/web.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { ContactComponent } from './components/contact/contact.component';
import { GraphismeComponent } from './components/graphisme/graphisme.component';
import { PhotographieVideoComponent } from './components/photographie-video/photographie-video.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'web', component: WebComponent},
  { path: 'graphisme', component: GraphismeComponent},
  { path: 'marketing', component: MarketingComponent},
  { path: 'photographie-video', component: PhotographieVideoComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WebComponent,
    MarketingComponent,
    ContactComponent,
    GraphismeComponent,
    PhotographieVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
