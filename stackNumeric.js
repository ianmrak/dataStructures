function Stack() {
    var stack = {};
    stack.count = 0;
    stack.storage = {};
    extend(stack, methods);
    return stack;
  }

  function extend(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  }
  var methods = {}
    methods.push = function(string) {
      this.storage[this.count] = string;
      this.count++;
    },
    methods.pop = function() {
      var out = this.storage[this.count-1];
      delete this.storage[this.count-1];
      this.count--;
      console.log('removed ' + out)
      return out;
    },
    methods.size = function() {
      console.log('current size: ' + this.count);
      return this.count;
    },
    methods.contains = function() {
      console.log(this.storage);
    }


var list = Stack();

list.push("Ian");
list.push("Lauren");
list.size();
list.contains();
list.pop();
list.size();
list.contains();
