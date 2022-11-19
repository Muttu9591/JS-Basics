//object constructor function
function Person(name, city) {
  this.name = name;
  this.city = city;
  this.getMessage = function () {
    return "I am " + this.name + " from " + this.city;
  };
}
const person1 = new Person("ranganath", "bangalore");
const person2 = new Person("muttu", " mumbai");
console.log(person1);
console.log(person1.getMessage());
console.log(person2.getMessage());
console.log(person1.getMessage());
