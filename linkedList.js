function linkedList() {
  var count = 0;
  var head = null
  this.getCount = function() {
    return count;
  }
  this.displayAll = function() {
    if (head === null) {
      return null;
    }
    else {
      var arr = [];
      var current = head;
    }
    for (var i = 0; i < count; i++) {
      arr[i] = current.data;
      current = current.next;
    }
    console.log(arr);
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
    var node = Node(data);
    node.next = head;
    head = node;
    count++;
  }
  this.add = function(data, index) {
    if (index === 0) {
      this.addFirst;
    }
    else if (index > -1 && index < count) {
      node = Node(data);
      var previous = head;
      var current = head.next;
      var i = 0;
      while (i++ < index) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.next = current;
      count++;
    }
    else {
      console.log("Out of bounds")
    }
  }
  this.removeFirst = function() {
    if (head === null) {
      return null;
    }
    else {
      var out = head;
      head = head.next;
      if (count > 0) {
        count--;
      }
      console.log('out data: ' + out.data)
      return out.data;
    }
  }
  this.removeAt = function(index) {
    if (index === 0) {
      this.removeFirst;
    }
    else if (index > -1 && index < count) {
      var current = head;
      var previous;
      var i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
      count--;
    }
    else {
      return null;
    }
    console.log('out data removed at index ' + index + ': ', current.data)
    return current.data;
  }
  function Node(data) {
    return {
      data: data,
      next: null
    }
  }
}

var list = new linkedList();
list.addFirst("Lauren");
list.addFirst("Ian");
list.displayAll();
list.add("Pipper", 1);
list.displayAll();
list.removeFirst();
list.displayAll();
list.addFirst("Slater");
list.displayAll();
list.removeAt(1);
list.displayAll();
