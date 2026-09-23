class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;
}

let list = new LinkedList();

function insertAtHead(data) {
  const node = new Node(data);
  node.next = list.head;
  list.head = node;
  if (list.length == 0) list.tail = node;
  list.length++;
}

function insertAtTail(data) {
  const node = new Node(data);
  if (list.length == 0) {
    list.head = node;
    list.tail = node;
  } else {
    list.tail.next = node;
    list.tail = tail.next;
  }
  list.length++;
}
function printList() {
  let current = list.head;
  while (current.next) {
    console.log(current.data);
    current = current.next;
  }
}

function search(data) {
  let current = list.head;
  while (current) {
    if (current.data == data) return true;
    current = current.next;
  }
  return false;
}

function deleteHead() {
  if (list.length == 0) return;
  list.head = list.head.next;
  if (list.head == null) list.tail = null;
  list.length--;
}

function deteTail() {
  if (list.length == 0) return;
  if (list.length == 1) {
    list.tail == null;
    list.head = null;
    return;
  }
  let current = list.head;
  while (current !== list.tail) {
    current = current.next;
  }
  current.next = null;
  list.tail = current;
  list.length;
}

function deleteVal(data) {
  if (list.length == 0) return;
  if (list.head.data === data) {
    list.head = list.head.next;
    if (list.head == null) list.tail = null;
    list.length--;
    return;
  }
  let prev = list.head;
  let current = prev.next;

  while (current) {
    if (current.data == data) {
      prev.next = current.next;
      if (current === list.tail) list.tail = prev;
      list.length--;
    } else {
      prev = current;
      current = current.next;
    }
  }
}

function reverseList() {
  if (list.length < 2) return;
  let prev = null;
  let current = list.head;
  list.tail = current;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  list.head = prev;
}


function insertAtIndex(data, index) {
  if (index < 0 || index > list.length) return; // invalid index

  const node = new Node(data);
  if (index === 0) {
    node.next = list.head;
    list.head = node;
    if (!list.tail) list.tail = node;
    list.length++;
    return;
  }

  let current = list.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  node.next = current.next;
  current.next = node;

  if (node.next === null) {
    list.tail = node;
  }

  list.length++;
}


function deleteAtIndex(index){
   if (index < 0 || index > list.length ) return;
   if(index === 0){
    let temp = head.next
    list.head.next = null
    list.head = temp
    if(!temp){
      list.tail = null
    }
    list.length--
  }
    let current = list.head
    let prev = null
    for(let i = 0; i <index ; i++){
      prev = current
      current =  current.next
    }
    prev.next = current.next
    list.length--

    
   }

   function deleteAtIndex(index) {
  if (index < 0 || index >= list.length) return; 
  if (index === 0) {
    list.head = list.head.next;
    if (!list.head) list.tail = null; 
    list.length--;
    return;
  }
  let current = list.head;
  let prev = null;
  for (let i = 0; i < index; i++) {
    prev = current;
    current = current.next;
  }

  prev.next = current.next;
  if (current === list.tail) {
    list.tail = prev;
  }

  list.length--;
}



