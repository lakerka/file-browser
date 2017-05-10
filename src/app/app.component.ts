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

    let i: number;
    let name: string;
    let parent: Folder = this.rootFolder
    for(i = 2; i < 10; i++) {
      name = Array(i).join("labas rytas ");
      parent.addChild(new Folder(name));
    }
  }
}
