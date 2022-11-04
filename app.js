class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.list = {};
  }
  isListEmpty() {
    return Object.entries(this.list).length === 0;
  }
  append(value) {
    if (this.isListEmpty()) this.list = new Node(value);
    else {
      let nextNode = this.list;
      while (nextNode.next !== null) nextNode = nextNode.next;
      nextNode.next = new Node(value);
    }
  }
  prepend(value) {
    if (this.isListEmpty()) this.list = new Node(value);
    else {
      const previousList = this.list;
      this.list = new Node(value, previousList);
    }
  }
  getSize() {
    if (this.isListEmpty()) return 0;
    let total = 1;
    let nextNode = this.list;
    while (nextNode.next !== null) {
      total += 1;
      nextNode = nextNode.next;
    }
    return total;
  }
}

let myLinkedList = new LinkedList();
