function myFetch(url) {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  console.error(`myFetch(${url}) created promise`, promise);

  const table = document.querySelector("table#pending-promises");
  const tr = document.createElement("tr");
  table.appendChild(tr);

  const tdUrl = document.createElement("td");
  tdUrl.textContent = url;
  tr.appendChild(tdUrl);

  const error = new Error(`Rejected myFetch(${url})`);

  const [, ...stack] = error.stack.split("\n");
  const tdStack = document.createElement("td");
  tdStack.innerHTML = stack.join("<br>");
  tr.appendChild(tdStack);

  const buttonResolve = document.createElement("button");
  buttonResolve.textContent = "Resolve";
  buttonResolve.addEventListener("click", () => {
    resolve({ body: url });
    console.log(`myFetch(${url}) resolved promise`, promise);
    tr.remove();
  });
  const tdResolve = document.createElement("td");
  tdResolve.appendChild(buttonResolve);
  tr.appendChild(tdResolve);

  const buttonReject = document.createElement("button");
  buttonReject.textContent = "Reject";
  buttonReject.addEventListener("click", () => {
    reject(error);
    tr.remove();
  });
  const tdReject = document.createElement("td");
  tdReject.appendChild(buttonReject);
  tr.appendChild(tdReject);

  return promise;
}

let fooCount = 1;
async function foo() {
  const response = await myFetch(`/foo${fooCount++}`);
  return await response.body;
}

let bazCount = 1;
function baz(name) {
  return myFetch(`/baz${bazCount++}/${name}`);
}

function bar() {
  return baz("bar").then(response => response.body);
}
