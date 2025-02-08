class ListNode {
  data: any;
  next: ListNode | null = null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor(data: any) {
    const node = new ListNode(data);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(val: any) {
    const newNode = new ListNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.length++;
  }

  removeAt(position: number) {
    if (position <= 0 || position > this.length) return;
    if (position === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let previous = null;
      let current = this.head;
      let i = 0;

      while (i < this.length) {
        previous = current;
        if (current) current = current.next;
        i++;
      }
      if (previous && current) previous.next = current.next;
    }
    this.length--;
  }

  insertAt(data: any, position: number) {
    if (position < 0 || position > this.length) return undefined;
    const node = new ListNode(data);
    if (position === 0) {
      this.head = node;
      if (this.length === 0) this.tail = node;
    } else {
      let previous = null;
      let current = this.head;
      let i = 0;
      while (i < position) {
        previous = current;
        if (current) current = current.next;
        i++;
      }
      node.next = current;
      if (previous) previous.next = node;

      if (this.length === position) {
        this.tail = node;
        this.tail.next = null;
      }
    }
    this.length++;
  }

  reverse() {
    if (this.length === 0) return;
    let temp = this.head;
    let previous = null;
    let next = null;
    this.tail = temp;
    for (let i = 0; i < this.length; i++) {
      if (temp) next = temp.next;
      if (temp) temp.next = previous;
      previous = temp;
      temp = next;
    }
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let previous = null;
      let current = this.head;
      while (current?.next) {
        previous = current;
        current = current.next;
      }
      if (previous) {
        previous.next = null;
        this.tail = previous;
      }
    }
    this.length--;
  }
}

function exec() {
  const node = new SingleLinkedList(2);
  node.push(3);
  node.push(4);
  node.push(5);
  console.log(JSON.stringify(node));
}

exec();
