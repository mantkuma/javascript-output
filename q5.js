const data = {
  val: 10,
  getVal() {
    return this.val;
  },
  getvalAr: () => {
    return this.val;
  },
};

console.log(data.getVal());
console.log(data.getvalAr());
