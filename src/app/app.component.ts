import { Component } from '@angular/core';

import { Folder } from './shared/folder.model';
import { FolderManager } from './shared/folder-manager.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootFolder: Folder;
  folderManager: FolderManager;

  constructor() {
    this.rootFolder = new Folder('home');
    this.folderManager = new FolderManager(this.rootFolder);
  }
}
