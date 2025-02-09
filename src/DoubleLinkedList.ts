class ListNodeItem {
  data: any;
  prev: ListNodeItem | null;
  next: ListNodeItem | null;
  constructor(val: any) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  head: ListNodeItem | null;
  tail: ListNodeItem | null;
  length: number;
  constructor(data: any) {
    this.head = new ListNodeItem(data);
    this.tail = this.head;
    this.length = 1;
  }

  push(data: any) {
    const node = new ListNodeItem(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.length++;
    }
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.tail;
      if (temp && this.tail) {
        temp.next = null;
        this.tail = temp.prev;
      }
    }
    this.length--;
  }

  printList() {
    let current = this.head;
    const list = [];
    let i = 0;
    while (i < this.length) {
      if (current) {
        list.push(current.data);
        current = current.next;
      }
      i++;
    }
    return list;
  }

  shift(val: any) {
    const node = new ListNodeItem(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      if (temp) {
        temp.prev = node;
        node.next = temp;
        this.head = node;
      }
      this.length++;
    }
  }

  unshift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (this.head) {
        let temp = this.head?.next;
        if (temp) {
          temp.prev = null;
          this.head = temp;
        }
      }
    }
    this.length--;
  }

  get(index: number) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.tail;
    let temp;
    if (index < this.length / 2) {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        if (temp) temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length; i > index; i--) {
        if (temp) temp = temp.prev;
      }
    }
    return temp;
  }

  insert(index: number, data: any) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
      this.shift(data);
      return;
    }

    if (index === this.length) {
      this.push(data);
      return;
    }

    const node = new ListNodeItem(data);
    const previousNode = this.get(index - 1);
    const nextNode = previousNode?.next;

    if (previousNode) {
      node.prev = previousNode;
      if (nextNode) node.next = nextNode;
      previousNode.next = node;
      if (nextNode) {
        nextNode.prev = node;
      }
    }

    this.length++;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return;
    if (index === 0) {
      this.unshift();
      return;
    }
    if (index === this.length) {
      this.pop();
      return;
    }
    const nodeToRemove = this.get(index);
    if (nodeToRemove) {
      const before = nodeToRemove.prev;
      const next = nodeToRemove.next;
      if (before && next) {
        before.next = next;
        next.prev = before;
      }
    }
  }
}

function execute() {
  const list = new DoubleLinkedList(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.shift(5);
  list.shift(6);
  list.unshift();
  list.unshift();
  list.insert(2, 10);
  list.remove(2);
  console.log(list.printList());
  console.log(list.get(2)?.data);
}

execute();
