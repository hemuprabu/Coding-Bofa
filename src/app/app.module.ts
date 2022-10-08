import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio'
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SummaryComponent } from './summary/summary.component'
@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
