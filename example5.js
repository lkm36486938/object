class GrandParent {
  constructor(name) {
    this.name = name;
  }

  pay() {
    return 100000;
  }

  wow() {
    return "smile";
  }
}

class Parent extends GrandParent {
  constructor(name) {
    super(name); //
  }

  pay() {
    return 5000;
  }

  brush() {
    return 7;
  }

  wow() {
    return "^_^";
    // return super.wow();
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

  애교부리기() {
    return super.wow();
  }
}

let grandParent = new GrandParent("GrandParent");
let parent = new Parent("Parent");
let child = new Child("Child");

console.log(child.애교부리기());
