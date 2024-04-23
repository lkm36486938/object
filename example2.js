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
}

let parent = new Parent("Parent");
let child = new Child("Child");

console.log("부모: ", parent.pay());
console.log("자식: ", child.pay());
console.log("-------------------------------");
console.log("부모: ", parent.brush());
console.log("자식: ", child.brush());
