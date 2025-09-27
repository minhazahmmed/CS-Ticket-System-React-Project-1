<h1>1. What is JSX, and why is it used?</h1>

JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside React.
It makes UI code more readable and allows combining markup with logic in a single file.

<h1>2. What is the difference between State and Props?</h1>

State: Managed inside a component, can change over time, used for dynamic data.

Props: Passed from parent to child components, read-only, used to send data and functions.

<h1>3. What is the useState hook, and how does it work?</h1>

useState is a React Hook that allows functional components to have state.

It returns an array: [value, setValue].

value is the current state.

setValue is a function to update that state and re-render the component.

<h1>4. How can you share state between components in React?</h1>

Lift state up: Move the state to the nearest common parent and pass data via props.

Context API: Share state globally without prop drilling.

State management libraries: Redux, Zustand, Recoil, etc.

<h1>5. How is event handling done in React?</h1>

Events are written in camelCase (e.g., onClick, onChange).

We pass a function as the event handler, not a string.

Example:
<button onClick={handleClick}>Click Me</button>