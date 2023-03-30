export default function changeStatus(task) {
    task.completed = !task.completed;
  }
  
  export default function clearCompleted(lists) {
    return lists.filter((task) => !task.completed);
  }