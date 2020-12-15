import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from './store/module';
import { NgReduxRouterModule } from '@angular-redux/router';
import { AppRoutingModule } from './app-routing.module';
import { PostsModule } from './posts/posts.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule,
    BrowserModule,
    FormsModule,
    PostsModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
