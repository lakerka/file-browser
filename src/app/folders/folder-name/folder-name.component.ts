import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { PopOverComponent } from 'ng2-pop-over/pop-over.component';

import { FolderManager } from '../../shared/folder-manager.model';
import { Folder } from '../../shared/folder.model';


@Component({
  selector: 'app-folder-name',
  templateUrl: './folder-name.component.html',
  styleUrls: ['./folder-name.component.css']
})
export class FolderNameComponent implements OnInit {
  @Input() folderManager: FolderManager;
  @Input() actionText: string;
  @Output() action = new EventEmitter<string>();

  @ViewChild(PopOverComponent) folderPopover: PopOverComponent;
  @ViewChild('nameinput') nameInput: ElementRef;

  folderForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.folderForm = new FormGroup({
        name: new FormControl('', [Validators.required, this.getNameAlreadyExistsValidator()])
    });
  }

  show(event: MouseEvent) {
    this.folderPopover.show(event);
    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 0);
  }

  getNameAlreadyExistsValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      let isValid: boolean = !this.folderManager.folder.hasChildWithName(name);
      return isValid ? null : {'nameAlreadyExists': true};
    };
  }

  performAction() {
    if (!this.folderForm.valid) {
      return;
    }
    this.action.emit(this.folderForm.get('name').value);
    this.clear();
  }

  cancelAction() {
    this.clear();
  }

  clear() {
    this.folderForm.reset();
    this.folderPopover.hide()
  }
}
