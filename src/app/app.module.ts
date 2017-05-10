import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DndModule } from 'ng2-dnd';
import { PopoverModule } from 'ng2-pop-over';

import { AppComponent } from './app.component';
import { FoldersComponent } from './folders/folders.component';
import { HeaderComponent } from './header/header.component';
import { FolderComponent } from './folders/folder/folder.component';
import { FolderNameComponent } from './folders/folder-name/folder-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    HeaderComponent,
    FolderComponent,
    FolderNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    DndModule.forRoot(),
    PopoverModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
