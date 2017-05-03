export class Folder {
  public name: string;
  public parent: Folder;
  public children: Folder[] = [];
  public childrenNames: Object = {};

  constructor(name: string, parent?: Folder) {
    this.name = name;
    this.parent = parent;
  }

  clone(): Folder {
    let clone: Folder = new Folder(this.name, this.parent);
    for(let child of this.children) {
      clone.addChild(child.clone());
    }
    return clone;
  }

  hasParent(): boolean {
    return this.parent != undefined;
  }

  hasChild(folder: Folder): boolean {
    return this.children.indexOf(folder) !== -1;
  }

  hasChildWithName(childName: string): boolean {
    return this.childrenNames.hasOwnProperty(childName);
  }

  addChild(newChild: Folder) {
    if (this.hasChild(newChild)) {
      return;
    }
    let newName = newChild.name;
    let i: number = 1;
    while (this.hasChildWithName(newName)) {
      newName = newChild.name + ' (' + i.toString() + ')';
      i += 1;
    }
    newChild.name = newName;
    newChild.parent = this;
    this.children.push(newChild);
    this.childrenNames[newChild.name] = true;
  }

  removeChild(child: Folder) {
    if (this.hasChild(child)) {
      let idx: number = this.children.indexOf(child);
      delete this.childrenNames[child.name];
      this.children.splice(idx, 1);
      child.parent = undefined;
    }
  }
}
