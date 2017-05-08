import { Component, OnInit, Input, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';

import { PopOverComponent } from '../../../node_modules/ng2-pop-over/pop-over.component.d';

import { FolderManager } from '../shared/folder-manager.model';
import { Folder } from '../shared/folder.model';
import { Utils } from '../shared/utils';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  _folderManager: FolderManager;
  @ViewChild('folderscontainer') foldersContainer: ElementRef;
  @ViewChild('foldernamemodal') folderModal: ElementRef;

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

  handleContextMenu(event: MouseEvent, popover: PopOverComponent) {
    let isTarget: boolean = Utils.isTarget(event, this.foldersContainer.nativeElement);
    if (isTarget) {
      popover.show(event);
      event.preventDefault();
    } else {
        popover.hide();
    }
  }

  handleNewFolderClick(event: MouseEvent, popover: PopOverComponent) {
      popover.show(event);
  }
}
