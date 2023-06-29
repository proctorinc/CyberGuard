import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BookComponent } from './pages/book/book.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { AboutComponent } from './pages/about/about.component';
import { PlansComponent } from './pages/plans/plans.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { FooterComponent } from './components/nav/footer/footer.component';
import { MenuIconComponent } from './components/icons/menu-icon.component';
import { WaveTransitionComponent } from './components/ui/wave-transition/wave-transition.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    BookComponent,
    SignInComponent,
    AboutComponent,
    PlansComponent,
    SolutionsComponent,
    NavbarComponent,
    FooterComponent,
    MenuIconComponent,
    WaveTransitionComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
