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

  getNextInPath() {
    let i: number = this.path.indexOf(this.folder)
    let next: Folder = undefined;
    if (i + 1 < this.path.length) {
      next = this.path[i + 1];
    }
    return next;
  }

  canStepBack() {
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
}
