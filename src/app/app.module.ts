import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './service/game-service';
import { CustomMaterialModule } from './material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
