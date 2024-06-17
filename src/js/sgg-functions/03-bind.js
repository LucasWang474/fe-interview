function bind(func, thisArg, ...args) {
  return function (...args2) {
    if (thisArg === undefined || thisArg === null) {
      thisArg = globalThis;
    }

    const TEMP_FUNC = Symbol("temp func");
    thisArg[TEMP_FUNC] = func;
    const res = thisArg[TEMP_FUNC](...args, ...args2);
    delete thisArg[TEMP_FUNC];
    return res;
  };
}

function test() {
  function add(a, b) {
    return a + b + this.c;
  }

  const obj1 = { c: 123 };
  const res1 = bind(add, { c: 123 }, 10, 20)(); // 153
  console.log(">>> res1", res1);
  console.log(">>> obj1", obj1);

  global.c = 1000;
  const res2 = bind(add, null, 30, 40)(); // 1070
  console.log(">>> res2", res2);
}

test();
