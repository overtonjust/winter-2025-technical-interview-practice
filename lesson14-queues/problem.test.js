const Queue = require('./problem');


describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should initialize an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test('should enqueue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size()).toBe(2);
  });

  test('should dequeue elements in FIFO order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.isEmpty()).toBe(true);
  });

  test('should return null when dequeuing from an empty queue', () => {
    expect(queue.dequeue()).toBeNull();
  });

  test('should peek at the front element without dequeuing', () => {
    queue.enqueue(5);
    queue.enqueue(10);
    expect(queue.peek()).toBe(5);
    expect(queue.size()).toBe(2);
  });

  test('should return null when peeking an empty queue', () => {
    expect(queue.peek()).toBeNull();
  });
});