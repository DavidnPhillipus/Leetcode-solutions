class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Insert at head
  insertHead(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
  }

  //Insert at at tail
  insertTail(data) {
    const node = new Node(data);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  //Insert at an index
  insertAtIndex(index, data) {
    if (index < 0 || index > this.length) return;

    const node = new Node(data);

    if (index === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.length++;
      return;
    }

    if (index === this.length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    let prev = current.prev;
    prev.next = node;
    node.prev = prev;
    node.next = current;
    current.prev = node;

    this.length++;
  }

  delHead() {
    if (!head) return;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.length--;
  }

  delTail() {
    if (!this.tail) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
  }

  delIndex(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return;
    }
    let current = this.head;
    while (current < index) {
      current = current.next;
    }
    let last = current.prev;
    let other = current.next;

    last.next = other;
    other.prev = last;
    if (other) other.prev = last;
    else this.tail = last;

    this.length--;
  }
}
