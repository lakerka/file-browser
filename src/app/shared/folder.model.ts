export class Folder {
  public name: string;
  public parent: Folder;
  public children: Folder[] = [];

  constructor(name: string, parent?: Folder) {
    this.name = name;
    this.parent = parent;
  }

  hasParent() {
    return this.parent != undefined;
  }

  addChild(child: Folder) {
    child.parent = this;
    this.children.push(child);
  }

  removeChild(child: Folder) {
    let idx: number = this.children.indexOf(child);
    if (idx != -1) {
      this.children.splice(idx, 1);
      child.parent = undefined;
    }
  }
}
