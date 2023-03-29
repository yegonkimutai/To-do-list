// export const render = () => {
//     const form = document.getElementById("entry");
//     const input = document.getElementById("text");
//     const button  = document.querySelector(".add")

//     const lists = JSON.parse(localStorage.getItem('list')) || "[]";

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const value = input.value;
//         if(value === '') {
//             return
//         }

//         const task = {
//             id: lists.length + 1,
//             name: value,
//             complete: false
//         }

//         lists.push(task);
//         localStorage.setItem('list',JSON.stringify(lists));
//     });
//   }

  //   const displayTask = () => {
//     const todo = document.getElementById('to-do-list');
  
//     const sortTask = lists.sort((one, two) => one.index - two.index);
  
//     const items = sortTask.map((task) => {
//       const element = document.createElement('div');
//       element.innerHTML = `
//           `;
  
//       return element;
//     });
  
//     items.forEach((element) => {
//       todo.appendChild(element);
//     });
//   };
//   displayTask();