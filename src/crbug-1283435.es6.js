(function() {
  class FirstClass {
    constructor(msg) {
      this.msg = msg;
    }
    func() {
      throw new Error(this.msg);
    }
  }

  class SecondClass {
    constructor(msg) {
      this.firstClass = new FirstClass(msg);
    }
    func() {
      this.firstClass.func();
    }
  }

  class ThirdClass {
    constructor(msg) {
      this.secondClass = new SecondClass(msg);
    }
    func() {
      this.secondClass.func();
    }
  }

  function func() {
    const thirdClass = new ThirdClass("Hello world!");
    thirdClass.func();
  }

  func();
})();
