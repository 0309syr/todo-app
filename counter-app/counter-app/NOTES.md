learning react

DAY1
what is React?
React is a JavaScript library for building user interfaces. React helps you build a webpage out of reusable components and update the screen when your data changes.

what is different using React?
JavaScript: manually find and change HTML elements
React: updates the UI when data changes

what is a component?
A React component is a reuseable JavaScript function that returns UI

what is JSX?
JSX is a syntax that lets you write HTML-like code inside JavaScript/TypeScript

<div>
<h1>Counter</h1>
<p>{count}</p>
<button>+</button>
</div>

---

counter code

import { useState } from "react";
import "./App.css";

function App() {
const [count, setCount] = useState(0);

return (

<div>
<h1>Counter</h1>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>

);
}

export default App;

---

import { useState } from "react";
{ useState } : React Hook. It lets your component remember information that can change.

import "./App.css";
Load the style from App.css into this React application.

function App() {}
This is React component. You can have as many as you want like:
function Header() {
return <h1>My App</h1>
}

    function Counter() {
    return <p>0</p>
    }

    function Footer() {
    return <footer>My Footer</footer>
    }

    It returns JSX and describes a piece of the UI

const [count, setCount] = useState(0); - useState(0)
Creat a piece of state. 0 means start with the value 0.
So initial count value is 0

    - [count, setCount]
    count is the current value
    setCount is the function that changes the value

The complete flow:
useState(0)
↓
count = 0
↓
User clicks +
↓
setCount(count + 1)
↓
count = 1
↓
React updates the UI
