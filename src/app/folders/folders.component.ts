import { Component, OnInit, Input } from '@angular/core';

import { Folder } from '../shared/folder.model';
import { FolderManager } from '../shared/folder-manager.model';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  _folderManager: FolderManager;
  focusedFolder: Folder = undefined;

  constructor() {
  }

  @Input()
  set folderManager(folderManager: FolderManager) {
    this._folderManager = folderManager;
    let i: number;
    let name: string;
    let parent: Folder = this._folderManager.folder
    for(i = 2; i < 10; i++) {
      name = Array(i).join("labas rytas ");
      parent.addChild(new Folder(name));
    }
  }

  ngOnInit() {
  }
}
