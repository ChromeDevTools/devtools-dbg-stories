import "./index.css";
import printMe from "./second";

async function main() {
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  document.body.appendChild(btn);

  const fun = document.createElement("pre");
  fun.innerHTML = printMe.toString();
  document.body.appendChild(fun);
}

main();

if (module.hot) {
  module.hot.accept("./second.js", function() {
    console.log("Accepting the updated 'second.js' module!");
    const btn = document.querySelector("button");
    btn.onclick = printMe;
    const fun = document.querySelector("pre");
    fun.innerHTML = printMe.toString();
  });
}
