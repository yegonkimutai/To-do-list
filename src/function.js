import { changeStatus, clearCompleted } from './complete.js';

// To-do-list initialization
let lists = JSON.parse(localStorage.getItem('lists')) || [];

if (localStorage.getItem('lists') !== null) {
  lists = JSON.parse(localStorage.getItem('lists'));
}

// Index and Local storage update
function updateIndex() {
  lists.forEach((list, index) => {
    list.index = index + 1;
  });
  localStorage.setItem('lists', JSON.stringify(lists));
}

// Create list
export default function createTasks() {
  const container = document.getElementById('main-list');
  const head = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = 'Today\'s To Do';

  const titleIcon = document.createElement('span');
  titleIcon.classList.add('refresh');
  titleIcon.innerHTML = '&#8635;';
  // reload page event listener
  titleIcon.addEventListener('click', () => {
    window.location.reload();
  });

  // adding title elements to head div
  title.appendChild(titleIcon);
  head.appendChild(title);

  const formInput = document.createElement('form');
  const input = document.createElement('input');
  input.setAttribute('placeholder', 'Add to your list...');
  input.setAttribute('type', 'text');
  input.classList.add('text');
  const submit = document.createElement('button');
  submit.classList.add('add');
  submit.type = 'submit';
  submit.innerHTML = '&#8629;';
  formInput.appendChild(input);
  formInput.appendChild(submit);

  const taskList = document.createElement('div');
  // display to-do-list
  const items = lists.map((task) => {
    const box = document.createElement('div');
    box.classList.add = ('to-do-list');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    // checkbox event listener for complete update
    checkbox.addEventListener('change', () => {
      box.classList.toggle('complete');
      changeStatus(task);
      localStorage.setItem('lists', JSON.stringify(lists));
    });

    const description = document.createElement('input');
    description.value = task.description;
    description.setAttribute('contenteditable', true);
    // description update and local storage
    description.addEventListener('input', () => {
      task.description = description.value;
      updateIndex();
    });

    const listIcon = document.createElement('span');
    listIcon.classList.add('update');
    listIcon.innerHTML = '&#128465;';

    // Remove list from UI
    listIcon.addEventListener('click', () => {
      const index = lists.indexOf(task);
      lists.splice(index, 1);
      updateIndex();
      box.remove();
    });

    box.appendChild(checkbox);
    box.appendChild(description);
    box.appendChild(listIcon);

    if (task.completed) {
      box.classList.toggle('complete');
    }

    return box;
  });

  items.forEach((item) => {
    taskList.appendChild(item);
  });

  container.appendChild(head);
  container.appendChild(formInput);
  container.appendChild(taskList);

  const clearBtn = document.createElement('button');
  clearBtn.classList.add('clear');
  clearBtn.type = 'button';
  clearBtn.textContent = 'Clear all completed';
  // clearBtn event listener and local storage update
  clearBtn.addEventListener('click', () => {
    lists = clearCompleted(lists);
    container.innerHTML = '';
    localStorage.setItem('lists', JSON.stringify(lists));
    updateIndex();
    createTasks();
  });

  container.appendChild(clearBtn);

  // input form event listener
  formInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const { value } = input;

    if (value) {
      const task = {
        description: value,
        completed: false,
        index: lists.length,
      };

      lists.push(task);
      localStorage.setItem('lists', JSON.stringify(lists));
      input.value = '';
      container.innerHTML = '';
      updateIndex();
      createTasks();
    }
  });
}