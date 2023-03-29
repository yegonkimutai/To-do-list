import './style.css';

  const form = document.getElementById("entry");
  const input = document.getElementById("text");
  const todo = document.getElementById('to-do-list');
  
  let lists = JSON.parse(localStorage.getItem('lists')) || [];
  if(localStorage.getItem('lists')) {
    lists.map((task) => {
      createList(task)
    })
  }

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const value = input.value;
      if(value === '') {
          return
      }

      const task = {
          id: (lists.length + 1),
          name: value,
          complete: false 
      }

      lists.push(task);
      localStorage.setItem('lists', JSON.stringify(lists));

      createList(task);

      form.reset();
      input.focus();
  });

  function createList(task) {
    const element = document.createElement('div')

    element.setAttribute('id', task.id);

    element.innerHTML = `
    <input type="checkbox" id="${task.id}">
    <p> "${task.name}" </p>
    <br>
    <span>&#8942;</span>
    `;

    todo.append(element);

    if(task.complete) {
      element.classList.add('complete')
    }
  };
