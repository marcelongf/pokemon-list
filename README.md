# Pokemon list

  

This project is a modern React application built with Vite, utilizing Vitest for testing, React Router DOM for routing, and React Query for efficient data fetching and state management.

  

## Table of Contents

  

- [Getting Started](#getting-started)

- [Available Scripts](#available-scripts)

- [Technology Stack](#technology-stack)

- [Benefits of React Query](#benefits-of-react-query)


  

## Getting Started

  
 
To get started with this project, follow these steps:



1. Install dependencies:

```

yarn

```

  

2. Start the development server:

```

yarn dev

```

  

## Available Scripts

  

In the project directory, you can run:

  

-  `yarn dev`: Runs the app in development mode.

-  `yarn build`: Builds the app for production.

-  `yarn test`: Runs the test suite using Vitest.

-  `yarn lint`: Lints the project files.

-  `yarn preview`: Previews the built app locally.



  

## Technology Stack

  

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.

- [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.

- [Vitest](https://vitest.dev/): A Vite-native unit test framework with a focus on speed and simplicity.

- [React Router DOM](https://reactrouter.com/): Declarative routing for React applications.

- [React Query](https://react-query.tanstack.com/): A powerful data synchronization library for React.

- [Zustand](https://zustand-demo.pmnd.rs/): Powerful global state manager.

  

## Benefits of React Query

  

React Query offers several advantages for managing server state in React applications:

  

## 1. Automatic Caching

- Stores server responses in memory

- Eliminates duplicate network requests

- Example: When navigating back to a previously fetched page, data loads instantly

  

## 2. Real-time Data Synchronization

- Keeps UI in sync with server data

- Automatically refetches when window is refocused

- Example: When a user returns to your app, data updates automatically

  

## 3. Loading & Error States

- Built-in loading and error states

- No need for manual state management

```tsx

// Before React Query

const [data, setData] =  useState(null)

const [isLoading, setIsLoading] =  useState(true)

const [error, setError] =  useState(null)

  

// With React Query

const { data, isLoading, error } =  useQuery('todos', fetchTodos)
```

This combination of tools provides a robust, efficient, and developer-friendly environment for building modern React applications.

  

```