/**
 * Implement a class `Queue` with the following methods:
 *
 * 1. `enqueue(element)`: Adds an element to the end of the queue.
 * 2. `dequeue()`: Removes and returns the front element of the queue.
 * 3. `peek()`: Returns the front element without removing it.
 * 4. `isEmpty()`: Returns true if the queue is empty, otherwise false.
 * 5. `size()`: Returns the size of the queue.
 *
 * Please note that the time complexity of all methods are not optimal when using an array. But for the sake of simplicity, you can use an array to implement the queue. If you're interested in learning more about the optimal implementation, think about how you might use two stacks for optimal time complexity.
 */
class Node {
  constructor(data=null) {
    this.data = data;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  enqueue(element) {
    this.length++
    const newNode = new Node(element);

    if(!this.tail) {
      this.head = this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    this.length--
    
    if(!this.head) {
      return null
    }

    const oldHead = this.head
    this.head = this.head.next;

    if(this.length == 0) {
      this.tail = this.head = null
    }

    return oldHead.data;
  }

  peek() {
    if(this.length === 0) {
      return null
    }

    return this.head.data;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

module.exports = Queue;
