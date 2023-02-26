// const person = {
//   name: "이광렬",
//   getName: function () {
//     console.log("이름 : ", this.name);
//   },
// };
// person.getName(); // 이름 : 이광렬

// const who = person.getName();
// console.log("머임?", who);

// const newPerson = {
//   name: "김아무개",
//   getName: person.getName,
// };

// newPerson.getName(); // 이름 : 김아무개

// const bindPersonName = newPerson.getName.bind(person);
// bindPersonName();

// const testPerson = {
//   name: "이광렬",
//   getName: function () {
//     console.log("이름 : ", this.name);
//     const innerFunction = () => {
//       console.log("이름 : ", this.name);
//     };
//     innerFunction();
//   },
// };
// testPerson.getName(); // 이름 : 이광렬
// function callPerson(callback) {
//   console.log(callback());
// }
// callPerson(person.getName); // undefined

// function Person1(name) {
//   this.name = name;
// }
// const newPerson1 = new Person1("이광렬");
// console.log(newPerson1);

const person = {
  name: "이광렬",
  getName: function () {
    console.log("이름 : ", this);
    (function () {
      console.log("내장함수 이름 : ", this);
    })();
    // innerFunction();
  },
};
person.getName();
