import { Component, OnInit, Input } from '@angular/core';

import { PopOverComponent } from '../../../node_modules/ng2-pop-over/pop-over.component.d';

import { FolderManager } from '../shared/folder-manager.model';
import { Folder } from '../shared/folder.model';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  _folderManager: FolderManager;
  selectedFolder: Folder;
  cutFolder: Folder;
  copiedFolder: Folder;

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

  setSelectedFolder(folder: Folder) {
    this.selectedFolder = folder;
  }

  showPopover(event: MouseEvent, popover: PopOverComponent, folder?: Folder) {
    popover.show(event);
    event.preventDefault();
  }

  cut() {
    this.cutFolder = this.selectedFolder;
    this.copiedFolder = undefined;
  }

  copy() {
    this.copiedFolder = this.selectedFolder;
    this.cutFolder = undefined;
  }

  delete() {
    if (this.selectedFolder === this.cutFolder) {
      this.cutFolder = undefined;
    }
    if (this.selectedFolder === this.copiedFolder) {
      this.copiedFolder = undefined;
    }
    if (this.selectedFolder !== undefined) {
      this.selectedFolder.parent.removeChild(this.selectedFolder);
    }
    this.selectedFolder = undefined;
  }

  paste() {
    if (this.copiedFolder !== undefined) {
      let copiedFolder: Folder = Object.assign({}, this.copiedFolder)
      this._folderManager.folder.addChild(copiedFolder);
    } else if (this.cutFolder !== undefined) {
      this.cutFolder.parent.removeChild(this.cutFolder);
      this._folderManager.folder.addChild(this.cutFolder);
    }
  }

  isCutCopyDeleteDisabled(): boolean {
    return this.selectedFolder === undefined;
  }

  isPasteDisabled(): boolean {
    return this.cutFolder === undefined && this.copiedFolder === undefined;
  }
}
