import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainPage} from './component/main.page';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MainFormComponent} from './component/form/main-form/main-form.component';
import {MainPreviewComponent} from './component/preview/main-preview/main-preview.component';
import {CharacterService} from './service/character.service';
import {ExportService} from './service/export.service';
import {ImportService} from './service/import.service';
import {PdfService} from './service/pdf.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    MainFormComponent,
    MainPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    CharacterService,
    ExportService,
    ImportService,
    PdfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
