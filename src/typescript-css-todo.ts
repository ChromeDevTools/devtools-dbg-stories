const toDoInput = document.querySelector('#to-do-input') as HTMLInputElement;
const toDoList = document.querySelector('#to-do-list') as HTMLUListElement;

toDoInput.addEventListener('change', () => {
  const newToDo: HTMLLIElement = document.createElement('li');
  newToDo.textContent = toDoInput.value;
  toDoInput.value = '';
  toDoList.appendChild(newToDo);
});
