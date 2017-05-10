import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PopOverComponent } from 'ng2-pop-over/pop-over.component';

import { FolderManager } from '../shared/folder-manager.model';
import { Folder } from '../shared/folder.model';
import { Utils } from '../shared/utils';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  @ViewChild('folderscontainer') foldersContainer: ElementRef;
  @Input() folderManager: FolderManager;

  constructor() {}

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

  createNewFolder(newFolderName: string) {
    let newFolder: Folder = new Folder(newFolderName);
    this.folderManager.folder.addChild(newFolder);
  }
}
