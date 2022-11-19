console.log(globalThis);
// globalThis or this - refers to window object
const cars = {
  name: "maruti",
  year: 2008,
  get getname() {
    return this.name;
  },
  set getname(name) {
    this.name = name;
  }
};
cars.getname = "Honda";
console.log(cars.getname);
//
//  const abc = ()=> {
//    console.log(globalThis)
//  }
//  abc();

//primitive data types
// Non primitive data types
// pass by value and pass by reference
// All primitive Data types are pass by value
// Non-primitive Data types are pass by reference
