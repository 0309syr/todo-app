Quiz app

---GOAL---

1. Start screen
2. Questions with multiple-choice answers
3. Next question button
4. Score tracking
5. Progress indicator
6. Results screen

---PLAN---
First thing to think - What data do I need?

- questions
- options for the answer
- answer
- confirm button
- next button
- score
- progress

Structure
START PAGE
↓
User clicks START
↓
QUESTION + 3 OPTIONS
↓
User selects an option
↓
User clicks CONFIRM
↓
ANSWER IS REVEALED
↓
User clicks NEXT
↓
Next question
↓
After 3 questions:
SHOW SCORE
↓
START AGAIN

What JSX do I need?

- Start button
- Radio buttons for options
- Confirm button
- Next button
- Start Again button
- Question tag <h2>
- Option tag <ul>

What function do I need?

- render questions
- render answer page
- update score
- update progress

lets break down to parts start with the first thing users see!

**_ FIRST PAGE _**
--------------------------------|
| |
| |
| (title) |
| |
| [start button] |
| |
|-------------------------------|

this page should...
show title
reset score
reset progress
button to render the first question page

!!!INPORTANT!!!

1. install tailwind
   npm install tailwindcss @tailwindcss/vite
2. change vite.config.ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
   plugins: [
   react(),
   tailwindcss(),
   ],
   })

3. change css
   @import "tailwindcss";

4. change index.css
   @import "tailwindcss";
