import { Component, OnInit, Input } from '@angular/core';

import { FolderManager } from '../shared/folder-manager.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() folderManager: FolderManager;

  constructor() { }

  ngOnInit() {
  }

}
