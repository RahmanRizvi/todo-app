
# React To Do App

This project is a simple and efficient React-based To-Do app that allows users to add, delete, and manage tasks. It leverages local storage to persist tasks even after a page reload.

## Features

- Add Tasks: Users can easily add tasks to their to-do list.
- Delete Tasks: Tasks can be deleted once completed or when no longer needed.
- Local Storage: Tasks persist across page reloads by storing data in the browser’s local storage.

## Technologies Used

**React:** A JavaScript library for building user interfaces.  

**React Hooks:** For managing state and side effects (useState).

**Bootstrap:** For responsive and modern styling.

**Local Storage:** To persist task data across page reloads.

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
Run the development server
```bash
    npm start
```
Open the app in your browser at http://localhost:3000.

## Local Storage Implementation

Saving Tasks

```bash
  useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
```

Loading Task

```bash
  useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (savedTasks) {
    setTasks(savedTasks);
  }
  }, []);
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://drive.google.com/file/d/143c7Q0ickm2inZVWTCI-sVM-nX7t-26f/view?usp=drive_link)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rahman-rizvi-472333220)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/manbehindbooks)

## Feedback

If you have any feedback, please reach out to me at rahmvn@outlook.com

## License
This project is open-source and available under the [MIT](https://choosealicense.com/licenses/mit/) License.
