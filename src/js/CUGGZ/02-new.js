function myNew(Constr, ...args) {
  const obj = {};
  obj.__proto__ = Constr.prototype;
  const res = Constr.apply(obj, args);
  return typeof res === "object" && res ? res : obj;
}

function Test(a, b) {
  this.a = a;
  this.b = b;
}

let test = myNew(Test, 1, 2);
console.log(test);

class Hello {
  hi = 1;
}

const h = new Hello();
console.log(">>> h", h);
