var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Enum representing todo statuses
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["Pending"] = 0] = "Pending";
    TodoStatus[TodoStatus["InProgress"] = 1] = "InProgress";
    TodoStatus[TodoStatus["Completed"] = 2] = "Completed";
})(TodoStatus || (TodoStatus = {}));
// Example todo items
var todo1 = { id: 1, task: "Completed", status: TodoStatus.Pending };
var todo2 = { id: 2, task: "Reviewed", status: TodoStatus.InProgress };
var todo3 = { id: 3, task: "Submitted", status: TodoStatus.Completed };
// Function to update todo status
function updateTodoStatus(todo, newStatus) {
    return __assign(__assign({}, todo), { status: newStatus });
}
// Usage
console.log(todo1); // Output: { id: 1, task: 'Complete assignment', status: 0 }
console.log(todo2); // Output: { id: 2, task: 'Review code', status: 1 }
console.log(todo3); // Output: { id: 3, task: 'Submit report', status: 2 }
// Updating todo status
var updatedTodo = updateTodoStatus(todo1, TodoStatus.Completed);
console.log(updatedTodo); // Output: { id: 1, task: 'Complete assignment', status: 2 }
