export class Utils {
  static isNodeOneOfAncestors(event: MouseEvent, node: Node): boolean {
    let target: Node = event.target as Node;
    let isTarget: boolean = false;
     do {
       if (target === node) {
         isTarget = true;
         break;
       }
       target = target.parentNode;
     } while (target);
    return isTarget;
  }

  static isTarget(event: MouseEvent, node: Node): boolean {
    let target: Node = event.target as Node;
    return target === node;
  }
}
