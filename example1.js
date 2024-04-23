class Parent {
  constructor(name) {
    this.name = name;
  }

  pay() {
    return 5000;
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
  }
}

let parent = new Parent("Parent");
let child = new Child("Child");

console.log("부모: ", parent.pay());
console.log("자식: ", child.pay());
