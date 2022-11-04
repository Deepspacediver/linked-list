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
  append(value) {
    if (this.isListEmpty()) this.head = new Node(value);
    else {
      let nextNode = this.head;
      while (nextNode.next !== null) nextNode = nextNode.next;
      nextNode.next = new Node(value);
    }
  }
  prepend(value) {
    if (this.isListEmpty()) this.list = new Node(value);
    else {
      const previousList = this.head;
      this.head = new Node(value, previousList);
    }
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
}

let myLinkedList = new LinkedList(new Node("base"));
