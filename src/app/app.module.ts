import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookComponent } from './book/book.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { PlansComponent } from './plans/plans.component';
import { SolutionsComponent } from './solutions/solutions.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, BookComponent, SignInComponent, AboutComponent, PlansComponent, SolutionsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
