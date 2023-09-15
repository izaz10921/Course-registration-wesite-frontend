# Question answer

Add at least 3 Project features
- In my project, all the cards are created dynamically.
- When you click the "Select" button, the system automatically calculates the credit time, total cost, and remaining credit hours.
- Everything happens on a single page, making it user-friendly and providing a better experience for both users and developers compared to having multiple pages.

Discuss how you managed the state in your assignment project.
We know that a state has two things: a variable and a callback function. When using the 'useState' function, it's like setting up a memory. In this case, there are four different states being used. A click handler function is declared. The App.jsx returns two components. The first component is called "Cart," and it receives the click handler function as a parameter. Inside the Card component, there's a section with a "Select" button. When this button is clicked, it triggers an 'onClick' function. This 'onClick' function also takes an object as a parameter, which it then passes to the click handler function received as a prop. Finally, the 'useState' callback function is called, and it receives one argument. This callback function is responsible for updating the value with every click.That's how I manage state in my assignment project.
