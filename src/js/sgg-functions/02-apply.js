function apply(func, newThis, args) {
  if (newThis === undefined || newThis === null) {
    newThis = globalThis;
  }

  const TEMP_FUNC = Symbol("temp func");
  newThis[TEMP_FUNC] = func;
  const res = newThis[TEMP_FUNC](...args);
  delete newThis[TEMP_FUNC];

  return res;
}

function test() {
  function add(a, b) {
    return a + b + this.c;
  }

  const obj1 = { c: 123 };
  const res1 = apply(add, { c: 123 }, [10, 20]); // 153
  console.log(">>> res1", res1);
  console.log(">>> obj1", obj1);

  global.c = 1000;
  const res2 = apply(add, null, [30, 40]); // 1070
  console.log(">>> res2", res2);
}

test();
