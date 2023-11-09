import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListCardComponent } from './item-list/item-list-card/item-list-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemComponent,
    ItemListComponent,
    ItemListCardComponent,
    LoginPageComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  // entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
