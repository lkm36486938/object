function Person(name) {
  this.name = name;
}

Person.prototype.status = function () {
  return "Name: " + this.name + ", Age: " + this.getAge();
};

Person.prototype.getAge = function () {
  return "Unknown";
};

/*
    ------------------------------
    ------------------------------
    ---create new Person Object---
    ------------------------------
    ------------------------------
 */
function Person1(name) {
  Person.call(this, name);
}

// 프로토타입 체인 설정
Person1.prototype = new Person();
// Person1.prototype = Object.create(Person.prototype);

Person1.prototype.getAge = function () {
  return 32;
};

var Lee = new Person1("Lee");

console.log(Lee.status());
