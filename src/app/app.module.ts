import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula';
import { DndModule } from 'ng2-dnd';

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
    HttpModule,

    DragulaModule,
    DndModule.forRoot(),
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
