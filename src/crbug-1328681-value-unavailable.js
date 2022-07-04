function tdz() {
  debugger;
  const x = 2 ?? y + x;
  let y = x + 1;
  return y;
}

function opt() {
  function optimizedOut(x, stop) {
    let y = x + 1;
    let z = y + 1;
    if (stop) {
      debugger;
    }
    return z;
  }

  for (let n = 0; n < 100000; ++n) {
    optimizedOut(n, false);
  }
  return optimizedOut(1, true);
}

function closure() {
  const y = 1;
  return function inner() {
    let x = 1;
    debugger;
    return x + 1;
  };
}
