function Queue1() {
  var oldestIndex = 0;
  var newestIndex = 0;
  var count = newestIndex - oldestIndex;
  var storage = {};
  this.getCount = function() {
    return count;
  };
  this.displayAll = function() {
    var arr = [];
    if (Object.keys(storage).length === 0) {
      console.log("Nothing in queue.");
      return false;
    }
    for (var key in storage) {
      arr.push(storage[key]);
    }
    console.log('\tRAW: ' + JSON.stringify(storage));
    console.log('\tTRIMMED: ' + arr);
    return arr;
  };
  this.enqueue = function(data) {
    storage[newestIndex] = data;
    newestIndex++;
    count = newestIndex - oldestIndex;
  }
  this.dequeue = function() {
    if (oldestIndex !== newestIndex) {
      var out = storage[oldestIndex];
      delete storage[oldestIndex];
      oldestIndex++;
      count = newestIndex - oldestIndex;
      return out;
  }
    else {
      return "Nothing in queue";
      }
  };
  this.resetQueue = function() {
    oldestIndex = 0;
    newestIndex = 0;
    count = newestIndex - oldestIndex;
    storage = {};
  };
  this.peekAt = function(index) {
    if (Object.keys(storage).indexOf(index.toString()) > -1) {
      console.log('\tPeeked at ' + storage[index] + ' at index ' +  index);
      return storage[index];
    }
    else {
      return false;
    }
  }
}

function Queue2() {
  var count = 0;
  var head = null;
  var tail = null;
  this.GetCount = function() {
    return count;
  }
  this.Enqueue = function(data) {
    var node = Node(data);
    if (head === null) {
      tail = node;
    }
    node.next = head;
    head = node;
    count++;
  }
  this.Dequeue = function() {
    if (count === 0) {
      return "Nothing in queue";
    }
    else {
      var current = head;
      var previous = null;
    }
    while (current.next) {
      previous = current;
      current = current.next;
    }
    if (count > 1) {
      previous.next = null;
      tail = previous;
    }
    else {
      head = null;
      tail = null;
    }
    count--;
  }
  this.DisplayAll = function() {
    if (head === tail) {
      console.log("failed")
      return null;
    }
    else {
      var arr = [];
      var current = head;
      for (var i = 0; i < count; i++) {
        arr[i] = current.data;
        current = current.next;
      }
      console.log('\tRAW: ' + JSON.stringify(head));
      console.log('\tTRIMMED: ' + arr);
      return arr;
    }
  }
  this.PeekAt = function(index) {
    if (index > -1 && index < count) {
      var current = head;

    for (var i = 0; i < index; i++) {
      current = current.next;
    }
    console.log('\tPeeked at ' + current.data + ' at index ' + index + ' of linked-list');
    return current.data;
    }
    else {
      return null;
    }
  }
  function Node(data) {
    return {
    data: data,
    next: null
    }
  }

}
console.log('Queue 1 stores data in numbered keys:');
var us = new Queue1();
us.enqueue("Ian");
us.enqueue("Lauren");
us.displayAll();
us.dequeue();
us.enqueue("Pipper");
us.displayAll()
us.peekAt(1);
var others = new Queue1();
others.enqueue("Zach");
others.enqueue("Stefan");
others.getCount();
others.displayAll();
others.dequeue("Stefan");
others.getCount();
others.displayAll();
others.resetQueue();
others.displayAll();

console.log('Queue 2 stores data via head and tail linked-lists:')
var family = new Queue2();
family.Enqueue("Ian");
family.Enqueue("Lauren");
family.DisplayAll();
family.Dequeue();
family.Enqueue("Pipper");
family.PeekAt(1);
family.DisplayAll();
