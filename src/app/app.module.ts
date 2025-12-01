import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AuthComponent } from './auth/auth.component';
import { PostCardComponent } from './post-card/post-card.component';
import {HttpClientModule} from "@angular/common/http";
import { GetConfirmationComponent } from './get-confirmation/get-confirmation.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AuthComponent,
    PostCardComponent,
    GetConfirmationComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
