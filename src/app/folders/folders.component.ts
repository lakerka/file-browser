import { Component, OnInit, Input } from '@angular/core';

import { FolderManager } from '../shared/folder-manager.model';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  @Input() folderManager: FolderManager;
  //TODO
  test: string[] = [];

  constructor() {
    let i: number;
    let item: string;

    for(i = 0; i < 10; i++) {
      item = Array(i).join("labas ");
      this.test.push(item);
    }

  }

  ngOnInit() {
  }
}
