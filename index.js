class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    let temp = new Node(data);
    if (!this.head) {
      this.head = temp;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = temp;
  }
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
  delete(data) {
    if (!this.head) {
      console.log("list is empty no element to delete");
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    while (current.data !== data) {
      prev = current;
      current = current.next;
    }
    if (!current) {
      console.log("value is not found in list");
      return;
    }
    prev.next = current.next;
  }
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data == data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();
console.log(list.find(30));
list.delete(30);
console.log(list.find(10));
list.print();
