function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
//D: undefined and ReferenceError
//When you declare a variable using let,
//the declaration is also hoisted,
// but the variable is placed in a "temporal dead zone" (TDZ)
//until the line where it's initialized.
