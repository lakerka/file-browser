import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { Folder } from '../../shared/folder.model';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input() folder: Folder;
  isClicked: boolean = false;
  elementRef: ElementRef;

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }

  ngOnInit() {
  }

  handleClick(event: MouseEvent) {
    let clickedElement = event.target;
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
}
