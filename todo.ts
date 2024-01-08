// Enum representing todo statuses
enum TodoStatus {
    Pending,
    InProgress,
    Completed,
  }
  
  // Interface defining the structure of a todo item
  interface TodoItem {
    id: number;
    task: string;
    status: TodoStatus;
  }
  
  // Example todo items
  const todo1: TodoItem = { id: 1, task: "Completed", status: TodoStatus.Pending };
  const todo2: TodoItem = { id: 2, task: "Reviewed", status: TodoStatus.InProgress };
  const todo3: TodoItem = { id: 3, task: "Submitted", status: TodoStatus.Completed };
  
  // Function to update todo status
  function updateTodoStatus(todo: TodoItem, newStatus: TodoStatus): TodoItem {
    return { ...todo, status: newStatus };
  }
  
  // Usage
  console.log(todo1); // Output: { id: 1, task: 'Complete assignment', status: 0 }
  console.log(todo2); // Output: { id: 2, task: 'Review code', status: 1 }
  console.log(todo3); // Output: { id: 3, task: 'Submit report', status: 2 }
  
  // Updating todo status
  const updatedTodo = updateTodoStatus(todo1, TodoStatus.Completed);
  console.log(updatedTodo); // Output: { id: 1, task: 'Complete assignment', status: 2 }
  