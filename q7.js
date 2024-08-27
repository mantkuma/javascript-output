class ArrowCheck {
  constructor(val) {
    this.val = val;
  }
  changeVal(val) {
    this.val = val;
  }
  getValWithoutArrow() {
    console.log(this.val);
  }
  getValWithArrow = () => {
    console.log(this.val);
  };
}

let arrowCheck = new ArrowCheck(10);
arrowCheck.getValWithArrow();
let bounffn = arrowCheck.getValWithoutArrow;
// bounffn();  undefined
let bounffn2 = arrowCheck.getValWithoutArrow.bind(arrowCheck);
bounffn2();
arrowCheck.getValWithoutArrow();
arrowCheck.changeVal(20);
arrowCheck.getValWithArrow();
arrowCheck.getValWithoutArrow();
setTimeout(arrowCheck.getValWithArrow, 1000);
setTimeout(arrowCheck.getValWithoutArrow, 1000);
