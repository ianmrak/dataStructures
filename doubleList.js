function doubleList() {
  var count = 0;
  var head = null;
  var tail = null;
  this.getHead = function() {
    if (head) {
      return head.data;
    }
    return null;
  }
  this.getTail = function() {
    if (tail) {
      return tail.data;
    }
    return null;
  }
  this.getCount = function() {
    return count;
  }
  var Node = function(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
  this.displayAll = function() {
    if (head === null) {
      return null;
    }
    var arr = [];
    var current = head;
    for (var i = 0; i < count; i++) {
      arr[i] = current.data;
      current = current.next;
    }
    console.log(arr);
    return arr;
  }
  this.displayAllReverse = function() {
    if (head === null) {
      return null;
    }
    var arr = [];
    var current = tail;
    for (var i = 0; i < count; i++) {
      arr[i] = current.data;
      current = current.previous;
    }
    return arr;
  }
  this.displayAt = function(index) {
    if (index > -1 && index < count) {
      var current = head;
      var i = 0
      while (i < index) {
        current = current.next;
        i++;
      }
      return current.data;
    }
    else {
      return null;
    }
  }
  this.addFirst = function(data) {
    var node = new Node(data);
      if (count === 0) {
        head = node;
        tail = node;
      }
      else {
        node.next = head;
        head.previous = node;
        head = node;
      }
      count++;
    }
  this.addLast = function(data) {
    var node = new Node(data);
      if (count === 0) {
        head = node;
        tail = node;
      }
      else {
        node.previous = tail;
        tail.next = node;
        tail = node;
      }
      count++;
    }
  this.add = function(data, index) {
    if (index > -1 && index < count) {
      var node = new Node(data);
      var current = head;
      var i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      current.previous.next = node;
      node.next = current;
      node.previous = current.previous;
      current.previous = node;
      count++;
    }
    else if (index === 0) {
      this.addFirst;
    }
    else {
      this.addLast;
    }
  }
  this.removeFirst = function() {
    if (head) {
      count--;
      if (count === 0) {
        head = null;
        tail = null;
      }
      else {
        head = head.next;
        head.previous = null;
      }
    }
  }
  this.removeLast = function() {
    if (tail) {
      count--;
      if (count === 0) {
        head = null;
        tail = null;
      }
      else {
        tail = tail.previous;
        tail.next = null;
      }
    }
  }
  this.removeAt = function(index) {
    if (index > -1 && index < count) {
      var current = head;
      var i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      current.next.previous = current.previous;
      current.previous.next = current.next;
      count--;
    }
    else if (index === 0) {
      this.removeFirst;
    }
    else {
      this.removeLast;
    }
  }
}

var list = new doubleList();
list.addFirst("Ian");
list.displayAll();
list.addLast("Lauren");
list.displayAll();
list.add("Pipper", 1);
list.displayAll();
list.removeLast();
list.displayAll();
list.removeFirst();
list.displayAll();
