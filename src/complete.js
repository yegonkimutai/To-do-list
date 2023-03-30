export function changeStatus(task) {
  task.completed = !task.completed;
}

export function clearCompleted(lists) {
  return lists.filter((task) => !task.completed);
}