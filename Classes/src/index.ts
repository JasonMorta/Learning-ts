class Task {
    constructor(
      public id: number,
      public title: string,
      public description: string,
      public completed: boolean = false
    ) {}
  
    // Methods
    updateDetails(title: string, description: string): void {
      this.title = title;
      this.description = description;
    }
  
    markedAsCompleted(): void {
      this.completed = !this.completed;
    }
  }
  
  // Task Manager Class
  class TaskManager {
    private tasksArr: Task[] = [];
  
    // Methods
    // Add a new task
    addTask(task: Task): void {
      this.tasksArr.push(task);
    }
  
    // Updated an existing task
    updateTask(id: number, title: string, description: string): void {
      // Find the task in the array of tasks
      const task = this.tasksArr.find((t) => t.id == id); //returns the task if found
  
      // Update the details of the task
      if (task) {
        task.updateDetails(title, description);
      }
    }
  
    // Mark task as completed
    markAsCompleted(id: number): void {
      // FInd the task in array
      const task = this.tasksArr.find((t) => t.id == id);
  
      // Update the task as completed
      if (task) {
        task.markedAsCompleted();
      }
    }
  
    // Delete a task
    deleteTask(id: number): void {
      // Find the task id in the array
      const task = this.tasksArr.findIndex((t) => t.id == id);
  
      // Delete the task
      if (task != -1) {
        this.tasksArr.splice(task, 1);
      }
    }
  
    // Get the list of tasks
    getAllTasks(): Task[] {
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
  console.log('getAllTasks', getAllTasks)