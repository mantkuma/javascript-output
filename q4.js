class ArrowCheck {
  constructor(val) {
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
arrowCheck.getValWithoutArrow();
setTimeout(arrowCheck.getValWithArrow, 1000);
setTimeout(arrowCheck.getValWithoutArrow, 1000);

// 10;
// 10;
// 10;
// undefined;
