import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { PopOverComponent } from 'ng2-pop-over/pop-over.component';

import { Folder } from '../../shared/folder.model';
import { FolderManager } from '../../shared/folder-manager.model';
import { Utils } from '../../shared/utils';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input() folder: Folder;
  @Input() folderManager: FolderManager;

  isDroppable: boolean = true;
  hasFocus: boolean = false;
  elementRef: ElementRef;


  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
  }

  handleContextMenu(event: MouseEvent, popover: PopOverComponent) {
    let isFolderTarget: boolean = Utils.isNodeOneOfAncestors(event, this.elementRef.nativeElement);
    this.hasFocus = isFolderTarget;
    if (isFolderTarget) {
      popover.show(event);
      event.preventDefault();
    } else {
        popover.hide();
    }
  }

  handleClick(event: MouseEvent) {
    let isFolderTarget: boolean = Utils.isNodeOneOfAncestors(event, this.elementRef.nativeElement);
    this.hasFocus = isFolderTarget;
  }

  onDrop(event: any) {
    let source: Folder = event.dragData;
    if (source != this.folder) {
      this.folderManager.moveFolder(source, this.folder);
    }
  }

  onDragStart() {
    this.isDroppable = false;
  }

  onDragEnd() {
    this.isDroppable = true;
  }

  renameFolder(newFolderName: string) {
    this.folder.name = newFolderName;
  }
}
