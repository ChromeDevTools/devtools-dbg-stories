function testPromiseThrow() {
  new Promise(() => {
    const err = new Error("oh no!");
    throw err;
  }).catch(console.error);
}

function testPromiseReject() {
  new Promise((resolve, reject) => {
    const err = new Error("oh no!");
    reject(err);
  }).catch(console.error);
}
