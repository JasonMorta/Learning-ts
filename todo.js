// // Enum representing todo statuses
// enum TodoStatus {
//     Pending,
//     InProgress,
//     Completed,
//   }
//   // Interface defining the structure of a todo item
//   interface TodoItem {
//     id: number;
//     task: string;
//     status: TodoStatus;
//   }
//   // Example todo items
//   const todo1: TodoItem = { id: 1, task: "Completed", status: TodoStatus.Pending };
//   const todo2: TodoItem = { id: 2, task: "Reviewed", status: TodoStatus.InProgress };
//   const todo3: TodoItem = { id: 3, task: "Submitted", status: TodoStatus.Completed };
//   // Function to update todo status
//   function updateTodoStatus(todo: TodoItem, newStatus: TodoStatus): TodoItem {
//     return { ...todo, status: newStatus };
//   }
//   // Usage
//   console.log(todo1); // Output: { id: 1, task: 'Complete assignment', status: 0 }
//   console.log(todo2); // Output: { id: 2, task: 'Review code', status: 1 }
//   console.log(todo3); // Output: { id: 3, task: 'Submit report', status: 2 }
//   // Updating todo status
//   const updatedTodo = updateTodoStatus(todo1, TodoStatus.Completed);
//   console.log(updatedTodo); // Output: { id: 1, task: 'Complete assignment', status: 2 }
/**
 
The use of enum values as numbers (indices) has some advantages,
especially when dealing with comparisons, logic, and switch statements.
However, if you find that using numbers directly in your application
logic is less readable or prone to errors, you can assign string values
to enum members for more descriptive status representation.

Here's an example of how you can use string values in the enum:

*/
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Pending"] = "Pending";
    TodoStatus["InProgress"] = "InProgress";
    TodoStatus["Completed"] = "Completed";
})(TodoStatus || (TodoStatus = {}));
var todo1 = { id: 1, task: "Complete assignment", status: TodoStatus.Pending };
var todo2 = { id: 2, task: "Review code", status: TodoStatus.InProgress };
var todo3 = { id: 3, task: "Submit report", status: TodoStatus.Completed };
console.log(todo1.status); // Output: 'Pending'
console.log(todo2.status); // Output: 'InProgress'
console.log(todo3.status); // Output: 'Completed'
