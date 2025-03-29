# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

//explaination of how to run the project, install dependencies:

This is a simple React application for user authentication and management using the Reqres API. It includes features like user login, fetching a user list, editing, deleting, and pagination.

1. Clone the Repository
2. Install Dependencies
3. Start the Development Server

//Project Structure

react-user-management/
│── src/
│ ├── components/
│ │ ├── Login.js # Login page component
│ │ ├── UserList.js # User list component
│ ├── App.js # Main app entry point
│ ├── index.js # React DOM render
│── package.json # Project dependencies
│── README.md # Project documentation

//Technologies Used

React.js – Frontend framework
Axios – For making API requests
Tailwind CSS – Styling framework
React Router – For navigation

//Assumptions & Considerations:

The project uses Reqres API for simulating login and user data.
The authentication does not persist (as it is a mock API).
No backend is required; all data is fetched from the Reqres API.
