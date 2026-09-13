Name: Dev Stack 
project Description:
This project is a modern and responsive web application built with React. It provides a clean, user-friendly interface with reusable components and a scalable project structure. The application is designed for good performance, maintainability, and a smooth user experience.
Technology: Frontend: React.js Programming Language: JavaScript / JSX Styling: Tailwind CSS Build Tool: Vite Package Manager: npm Version Control: Git & GitHub Code Editor: Visual Studio Code
Features Responsive Design — Works smoothly on desktop, tablet, and mobile devices. Reusable Components — Built with reusable React components for clean and maintainable code. User-Friendly Interface — Simple, modern, and easy-to-navigate UI for a better user experience.
1.JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows you to write HTML-like code directly inside JavaScript. .Easy to read: JSX makes React UI code look similar to HTML. .Component-based: JSX makes it easy to create and compose reusable React components.
2.Props State Props: .Passed from a parent component to a child .Read-only State: .Managed inside a component .Can be changed
3.useState is a React Hook that allows a functional component to store and manage data that can change over time.
4.useEffect is a React Hook used to perform side effects in a component, such as fetching data, calling an API, setting up event listeners, or updating the document title. I used useEffect to load the JSON data when the component first renders. It ensures that the data-fetching code runs after the component has been rendered, rather than running on every render.
5.Every item in a React .map() list needs a unique key prop so React can identify each item and efficiently update the UI when the list changes.
6.Conditional rendering means displaying different UI elements based on a condition. In React, we can use if, the ternary operator (? :), or the logical AND (&&) operator.
7.In React, data is usually passed from parent to child using props. A child can communicate back to the parent by receiving a callback function as a prop and calling it.

