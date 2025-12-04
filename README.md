# React Props Learning Project

This project is my third React learning exercise, where I explored the fundamentals of **props**, **destructuring**, and the **spread operator** in React components.

I followed this YouTube tutorial by Anthony Sistilli:  
🔗 https://youtu.be/SbwtUHxRej8?si=Vk5VRIsNd22_XFz9

---

## 📘 What I Learned

### ✅ 1. Props in React
- Props allow components to receive data from their parent component.
- They make components dynamic and reusable.
- In this project, each `Employee` component receives `firstname`, `lastname`, and `age` as props.

---

### ✅ 2. Destructuring Props
- Instead of using `props.firstname` or `props.lastname`, I learned how to simplify the code by destructuring props.

- Example:

```
const { firstname, lastname, age: employeeAge } = props;
```
-This makes the component cleaner and easier to read.

### ✅ 3. Using the Spread Operator

- I learned how to pass all object properties as props using the spread operator.

-Example:

<Employee key={employee.employeeId} {...employee} />

- This helps when passing multiple values without writing each prop manually.

