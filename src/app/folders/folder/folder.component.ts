import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { Folder } from '../../shared/folder.model';
import { FolderManager } from '../../shared/folder-manager.model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input() folder: Folder;
  @Input() folderManager: FolderManager;

  isClicked: boolean = false;
  isDroppable: boolean = true;
  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
  }

  handleClick(event: MouseEvent) {
    let clickedElement: Node = event.target as Node;
    let isClicked: boolean = false;
     do {
       if (clickedElement == this.elementRef.nativeElement) {
         isClicked = true;
         break;
       }
       clickedElement = clickedElement.parentNode;
     } while (clickedElement);
    this.isClicked = isClicked;
  }

  getName() {
    let name = this.folder.name;

    if (!this.isClicked && (name.length > 30)) {
      name = name.slice(0, 29) + '...';
    }

    return name;
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

  showPopover(event: MouseEvent, popover: any) {
    popover.show(event);
    event.preventDefault();
  }
}
