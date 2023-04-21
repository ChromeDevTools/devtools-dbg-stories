var toDoInput = document.querySelector("#to-do-input");
var toDoList = document.querySelector("#to-do-list");

toDoInput.addEventListener("change", function() {
  var newToDo = document.createElement("li");
  newToDo.textContent = toDoInput.value;
  toDoInput.value = "";
  toDoList.appendChild(newToDo);
});
