class MyClass {
  constructor(name) {
    this.name = name;
  }

  greetArrow = () => {
    console.log(`Hello, my name is ${this.name}`);
  };

  greetRegular() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const myInstance = new MyClass("John");

// Arrow function as a callback
setTimeout(myInstance.greetArrow, 1000); // Output: Hello, my name is John

// Regular function as a callback without binding
setTimeout(myInstance.greetRegular, 1000); // Output: Hello, my name is undefined

// Regular function as a callback with binding
setTimeout(myInstance.greetRegular.bind(myInstance), 1000); // Output: Hello, my name is John
