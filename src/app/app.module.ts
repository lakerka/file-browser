import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoldersComponent } from './folders/folders.component';
import { HeaderComponent } from './header/header.component';
import { FolderComponent } from './folders/folder/folder.component';

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    HeaderComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
