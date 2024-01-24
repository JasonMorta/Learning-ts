"use strict";
class Task {
    constructor(id, title, description, completed = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    // Methods
    updateDetails(title, description) {
        this.title = title;
        this.description = description;
    }
    markedAsCompleted() {
        this.completed = !this.completed;
    }
}
// Task Manager Class
class TaskManager {
    constructor() {
        this.tasksArr = [];
    }
    // Methods
    // Add a new task
    addTask(task) {
        this.tasksArr.push(task);
    }
    // Updated an existing task
    updateTask(id, title, description) {
        // Find the task in the array of tasks
        const task = this.tasksArr.find((t) => t.id == id); //returns the task if found
        // Update the details of the task
        if (task) {
            task.updateDetails(title, description);
        }
    }
    // Mark task as completed
    markAsCompleted(id) {
        // FInd the task in array
        const task = this.tasksArr.find((t) => t.id == id);
        // Update the task as completed
        if (task) {
            task.markedAsCompleted();
        }
    }
    // Delete a task
    deleteTask(id) {
        // Find the task id in the array
        const task = this.tasksArr.findIndex((t) => t.id == id);
        // Delete the task
        if (task != -1) {
            this.tasksArr.splice(task, 1);
        }
    }
    // Get the list of tasks
    getAllTasks() {
        return this.tasksArr;
    }
} // end of TaskManager class
// Create an instance of TaskManager class
const taskManager = new TaskManager();
// Create a tasks
const task1 = new Task(10, "Buy Milk", "Go to the store and buy milk", false);
const task2 = new Task(101, "Buy Bread", "Go to the bakery and buy bread", false);
const task3 = new Task(102, "Buy Butter", "Go to the store and buy butter", false);
// Add the tasks to the task manager
taskManager.addTask(task1);
taskManager.addTask(task2);
// Update the task
// Mark task as completed
// Delete a task
// Get all the tasks
const getAllTasks = taskManager.getAllTasks();
console.log('getAllTasks', getAllTasks);
