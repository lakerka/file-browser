import { Folder } from './folder.model';


export class FolderManager {
  public folder: Folder
  public path: Folder[];
  public cutFolder: Folder;
  public copiedFolder: Folder;

  constructor(folder: Folder, path?: Folder[]) {
    this.folder = folder;
    if (path != undefined) {
      this.path = path;
    } else {
      this.path = [folder];
    }
  }

  getPath(folder: Folder) {
    let path: Folder[] = [folder];
    while (folder.hasParent()) {
      path.push(folder.parent);
      folder = folder.parent;
    }
    path.reverse();
    return path;
  }

  updatePath() {
    let curPath: Folder[] = this.getPath(this.folder);
    let i: number;
    for(i = 0; i < this.path.length; i++) {
      let folder: Folder = this.path[i];
      if (curPath.indexOf(folder) != -1) {
        continue;
      } else if (i + 1 > curPath.length) {
        curPath.push(folder);
      } else {
        break;
      }
    }
    this.path = curPath;
  }

  getNextInPath(): Folder {
    let i: number = this.path.indexOf(this.folder)
    let next: Folder = undefined;
    if (i + 1 < this.path.length) {
      next = this.path[i + 1];
    }
    return next;
  }

  canStepBack(): boolean {
    return this.folder.hasParent();
  }

  stepBack() {
    if (this.canStepBack()) {
      this.folder = this.folder.parent;
      this.updatePath();
    }
  }

  canStepForward() {
    return this.folder.children.length > 0;
  }

  stepForward(child: Folder) {
    if (this.canStepForward() && this.folder.children.indexOf(child) != -1) {
      this.folder = child;
      this.updatePath();
    }
  }

  setFolder(folder: Folder) {
    this.folder = folder;
    this.updatePath();
  }

  moveFolder(source: Folder, target: Folder) {
    source.parent.removeChild(source);
    target.addChild(source);
    this.updatePath();
  }

  createNewFolder(name = 'New folder') {
    let newFolder: Folder = new Folder(name);
    this.folder.addChild(newFolder);
  }

  cut(folder: Folder) {
    this.cutFolder = folder;
    this.copiedFolder = undefined;
  }

  copy(folder: Folder) {
    this.copiedFolder = folder;
    this.cutFolder = undefined;
  }

  delete(folder: Folder) {
    if (folder === this.cutFolder) {
      this.cutFolder = undefined;
    }
    if (folder === this.copiedFolder) {
      this.copiedFolder = undefined;
    }
    if (folder !== undefined) {
      folder.parent.removeChild(folder);
    }
  }

  paste() {
    if (this.copiedFolder !== undefined) {
      this.folder.addChild(this.copiedFolder.clone());
    } else if (this.cutFolder !== undefined) {
      this.cutFolder.parent.removeChild(this.cutFolder);
      this.folder.addChild(this.cutFolder.clone());
    }
  }

  canPaste(): boolean {
    return this.copiedFolder !== undefined || this.cutFolder !== undefined;
  }
}
