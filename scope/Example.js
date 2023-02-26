var x = "전역 x";
function outer() {
  var y = "outer함수의 지역 y";
  console.log(x);
  console.log(y);
  function inner() {
    var x = "inner함수의 지역 x";
    console.log(x);
    console.log(y);
  }
  inner();
}
outer();
console.log(x);
// console.log(y);

var test = 123;
{
  const test = 456;
  console.log(test);
}
console.log(test); // 123
