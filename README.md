# TaskGo

TaskGo is a simple and intuitive task management web application built with React.js. It allows users to create, manage, and organize tasks with priority levels and completion statuses, providing an efficient way to keep track of upcoming, overdue, and completed tasks. All data is stored locally in the browser's local storage, so users can access their tasks on the same device and browser used to create them.

## Features

- *Dashboard*: View an overview of all tasks, including total tasks, pending tasks, overdue tasks, and completed tasks.
- *Task Management*: Add, edit, delete, and mark tasks as completed.
- *Priority Levels*: Set and update priority levels for tasks (High, Medium, Low).
- *Search and Filter*: Search tasks by title and filter them by priority and completion status.
- *Data Visualization*: Visual representation of task statuses for better insights.

## Technologies Used

- *React.js*: JavaScript library for building the user interface.
- *CSS*: For styling the components.
- *Local Storage*: To save tasks locally in the browser.

## Assumptions

- Local storage is empty upon the first load.
- The application is designed for single-user usage.
- Compatibility with modern browsers only (no support for Internet Explorer).
- All task data is saved in the browser’s local storage, accessible only on the same device and browser.
- Predefined task priority levels (High, Medium, Low).
- No handling of time zones for due dates.

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

Make sure you have *Node.js* and *npm* installed on your machine. You can check if you have them installed by running:

```bash
node -v and run code 
npm -v


Below are the installation steps of node and react and how to opened the browser and navigate to localhost to view the application

Install Node corresponding to your operating system and version
create one folder of your project name in my case it was TaskGo
open same in VS Code
open Terminal and run code 'npx create-reatct-app (your project name)'
cd (your project name)
npm start

Usage

    Adding a Task: Enter the task title, description, due date, and priority, then click Add Task. The new task will appear in the task list.
    Editing a Task: Click the edit icon on a task to modify its details.
    Deleting a Task: Click the delete icon to remove a task from the list.
    Marking as Complete: Click the checkbox icon to mark a task as complete.
    Searching and Filtering: Use the search bar to find tasks by title, and the filter options to filter tasks by priority and status.

Additional Information

    Local Storage: Task data is saved in the browser’s local storage, meaning data persists even if you close the browser. However, clearing the browser cache or using the application in incognito mode will remove saved tasks.
    Future Enhancements: Additional features such as user authentication, server-side storage, and advanced filtering could be implemented with more time and resources.

