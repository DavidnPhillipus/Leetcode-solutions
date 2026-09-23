class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insert at head
  insertAtHead(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node;
    this.length++;
  }

  // Insert at tail
  insertAtTail(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // Insert at index
  insertAtIndex(data, index) {
    if (index < 0 || index > this.length) return;

    if (index === 0) return this.insertAtHead(data);
    if (index === this.length) return this.insertAtTail(data);

    const node = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
    this.length++;
  }

  // Delete head
  deleteHead() {
    if (!this.head) return;
    this.head = this.head.next;
    if (!this.head) this.tail = null; // list became empty
    this.length--;
  }

  // Delete tail
  deleteTail() {
    if (!this.head) return;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.length--;
  }

  // Delete at index
  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.deleteHead();

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    const nodeToDelete = current.next;
    current.next = nodeToDelete.next;

    if (nodeToDelete === this.tail) {
      this.tail = current;
    }
    this.length--;
  }

  // Delete by value (first occurrence)
  deleteVal(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.deleteHead();
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      if (current.next === this.tail) this.tail = current;
      current.next = current.next.next;
      this.length--;
    }
  }

  // Search
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  // Reverse the list
  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = current;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // Print list
  printList() {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.data + ' → ';
      current = current.next;
    }
    console.log(output + 'null');
  }
}
