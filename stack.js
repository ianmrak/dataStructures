function Stack() {
  var top = null;
  var count = 0;
  this.getCount = function() {
    return count;
  }
  this.Push = function(data) {
    var node = Node(data);
    node.next = top;
    top = node;
    count++;
  }
  this.Peek = function() {
    if (top === null) {
      return null;
    }
    else {
      console.log(top.data);
      return top.data;
    }
  }
  this.Pop = function() {
    if (top === null) {
      return null;
    }
    if (count) {
    var out = top;
    top = top.next;
    if (count > 0) {
    count--;
    }
    return out;
    }
  }
  this.DisplayAll = function() {
    if (top === null) {
      return null;
    }
    else {
      var arr = [];
      var current = top;
      for (var i = 0; i < count; i++) {
        arr[i] = current.data;
        current = current.next;
      }
      console.log(arr);
      return arr;
    }
  }
  var Node = function(data) {
    return {
    data: data,
    next: null
    }
  }
}

var list = new Stack();
list.Push("Ian");
list.Push("Lauren");
list.Pop();
list.Push("Pipper");
list.Peek();
list.DisplayAll();
