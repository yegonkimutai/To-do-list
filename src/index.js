import './style.css';

const list = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'learn to make a to-do list with webpack',
    completed: false,
    index: 1,
  },
  {
    description: 'complete to do list project',
    completed: false,
    index: 2,
  },
];

const displayTask = () => {
  const todo = document.getElementById('to-do-list');

  const sortTask = list.sort((one, two) => one.index - two.index);

  const items = sortTask.map((task) => {
    const element = document.createElement('div');
    element.innerHTML = `
        <input type="checkbox">
        <p> ${task.description} </p>
        <br>
        <span>&#8942;</span>
        `;

    return element;
  });

  items.forEach((element) => {
    todo.appendChild(element);
  });
};

displayTask();