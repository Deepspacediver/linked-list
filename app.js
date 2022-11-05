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
}

let myLinkedList = new LinkedList();

myLinkedList.append("value").append("second-value").append("tail");
console.log(myLinkedList.at(2));
