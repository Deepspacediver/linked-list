class Node {
  constructor(value, next){
    this.value= value;
    this.next=null;
  }
}


class LinkedList {
  constructor(){
    this.list={}
  }
  append(value) {
    if(Object.entries(this.list).length === 0) this.list = new Node(value)
  }
}

let myLinkedList = new LinkedList()