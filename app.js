class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  isListEmpty() {
    return this.head === null;
  }
  traverse() {
    let nextNode = this.head;
    while (nextNode.next !== null) nextNode = nextNode.next;
    return nextNode;
  }
  append(value) {
    if (this.isListEmpty()) this.head = new Node(value);
    else {
      let nextNode = this.head;
      while (nextNode.next !== null) nextNode = nextNode.next;
      nextNode.next = new Node(value);
    }
    return this;
  }
  prepend(value) {
    if (this.isListEmpty()) this.head = new Node(value);
    else {
      const previousList = this.head;
      this.head = new Node(value, previousList);
    }
    return this;
  }
  getSize() {
    if (this.isListEmpty()) return 0;
    let total = 1;
    let nextNode = this.head;
    while (nextNode.next !== null) {
      total += 1;
      nextNode = nextNode.next;
    }
    return total;
  }
  getHead() {
    if (this.isListEmpty()) return "Empty list";
    else return this.head;
  }
  getTail() {
    let nextNode = this.head;
    if (this.isListEmpty() || nextNode.next === null)
      return "No tail to return";
    else {
      while (nextNode.next !== null) nextNode = nextNode.next;
      return nextNode;
    }
  }
  at(index) {
    if (this.isListEmpty()) return "Empty list";
    else {
      let currNode = this.head;
      let j = 0;
      while (j < index && currNode !== null) {
        currNode = currNode.next;
        j += 1;
      }
      return currNode === null ? "No such index in the list" : currNode;
    }
  }
  pop() {
    if (this.isListEmpty()) return "Empty list";
    if (this.getSize() === 1) {
      this.head = null;
    } else {
      let nextNode = this.head;
      while (nextNode.next.next !== null) nextNode = nextNode.next;
      nextNode.next = null;
    }
    return this;
  }
  contains(value, object = this) {
    for (const key in object) {
      if (object[key] === value) return true;
      else if (typeof object[key] === "object")
        return this.contains(value, object[key]);
    }
    return false;
  }
  find(value, object = this.head) {
    if (!this.contains(value)) return null;
    let index = 0;
    for (const key in object) {
      if (object[key] === value) return (index += 0);
      else if (typeof object[key] === "object") {
        index += 1;
        index += this.find(value, object[key]);
      }
    }
    return index;
  }
  toString() {
    let node = this.head;
    let returnedString = "";
    while (node !== null) {
      let nodeInString = `(${node.value}) -> `;
      returnedString += nodeInString;
      node = node.next;
    }
    return returnedString + "null";
  }
}
let myLinkedList = new LinkedList();

myLinkedList.append("maybe").append("second").append("tail");
console.log(myLinkedList.toString());
