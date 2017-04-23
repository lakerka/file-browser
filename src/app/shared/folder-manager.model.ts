import { Folder } from './folder.model';


export class FolderManager {
  public folder: Folder
  public path: Folder[];

  constructor(folder: Folder, path?: Folder[]) {
    this.folder = folder;
    if (path != undefined) {
      this.path = path;
    } else {
      this.path = [folder];
    }
  }

  canStepBack() {
    return this.folder.hasParent();
  }

  stepBack() {
    if (this.canStepBack()) {
      this.folder = this.folder.parent;
      this.path.pop();
    }
  }

  canStepForward() {
    return this.folder.children.length > 0;
  }

  stepForward(child: Folder) {
    if (this.canStepForward() && this.folder.children.indexOf(child) != -1) {
      this.folder = child;
      this.path.push(child);
    }
  }

  setFolder(folder: Folder) {
    this.folder = folder;
  }
}
