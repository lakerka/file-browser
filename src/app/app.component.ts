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
    let a = new Folder('a');
    let aa = new Folder('aa');
    a.addChild(aa);
    this.rootFolder.addChild(a);
    this.rootFolder.addChild(new Folder('b'));
    this.rootFolder.addChild(new Folder('c'));
    this.folderManager = new FolderManager(this.rootFolder);
  }
}
