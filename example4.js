class Parent {
  constructor(name) {
    this.name = name;
  }

  pay() {
    return 5000;
  }

  brush() {
    return 7;
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
  }

  brush() {
    return 3;
  }

  callParent() {
    return "부모님에게 용돈을 달라했더니 ";
  }

  take() {
    return this.callParent() + this.pay();
  }
}

let parent = new Parent("Parent");
let child = new Child("Child");

console.log(child.take());
