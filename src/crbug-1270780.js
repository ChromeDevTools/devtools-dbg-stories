async function* inner() {
  await 1;
  yield 1;
  await 1;
  yield 2;
  throw new Error();
}

async function bar() {
  try {
    for await (const val of inner());
  } catch {}
}
