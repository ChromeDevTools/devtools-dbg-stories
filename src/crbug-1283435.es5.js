(function() {
  function FirstClass(msg) {
    this.msg = msg;
  }
  FirstClass.prototype.func = function() {
    throw new Error(this.msg);
  };

  function SecondClass(msg) {
    this.firstClass = new FirstClass(msg);
  }
  SecondClass.prototype.func = function() {
    this.firstClass.func();
  };

  function ThirdClass(msg) {
    this.secondClass = new SecondClass(msg);
  }
  ThirdClass.prototype.func = function() {
    this.secondClass.func();
  };

  function func() {
    const thirdClass = new ThirdClass("Hello world!");
    thirdClass.func();
  }

  func();
})();
