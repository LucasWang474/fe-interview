function myInstanceof(instance, constructor) {
  const prototype = constructor?.prototype;
  let curProto = Object.getPrototypeOf(instance);

  while (curProto && prototype) {
    if (curProto === prototype) return true;
    curProto = Object.getPrototypeOf(curProto);
  }

  return false;
}

function test() {
  const res1 = myInstanceof(1, Number);
  console.log(">>> res1", res1);

  const res2 = myInstanceof(1, String);
  console.log(">>> res2", res2);
}

test();
