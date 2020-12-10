import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContaFormComponent } from './conta/conta-form/conta-form.component';
import { ContaListComponent } from './conta/conta-list/conta-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaFormComponent,
    ContaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
