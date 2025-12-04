
import './App.css';
import Employee from './Employee';

const employeeInfo = [
  {
    firstname: "Jack",
    lastname: "Smith",
    age: 21,
    employeeId: 1
  },

  {
    firstname: "Stephine",
    lastname: "A",
    age: 21,
    employeeId: 2
  },

  {
    firstname: "Goerge",
    lastname: "B",
    age: 21,
    employeeId: 3
  },

  {
    firstname: "Anthony",
    lastname: "C",
    age: 21,
    employeeId: 4
  },
];

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Direcory</h1>

         {employeeInfo.map(employee => {
          // const { firstname, lastname, age } = employee;
          return (
            <Employee key={employee.employeeId} {...employee} />
          )

        })}


        {/* {employeeInfo.map(employee => {
          const { firstname, lastname, age } = employee;
          return (
            <Employee firstname={firstname} lastname={lastname} age={age} />
          )

        })} */}



        {/* <Employee firstname="Jack" lastname="Smith" age="21"/>
        <Employee firstname="Stephine" lastname="A" age="21"/>
        <Employee firstname="Goerge" lastname="B" age="21"/>
        <Employee firstname="Anthony" lastname="C" age="21"/> */}
      </header>
    </div>
  );
}

export default App;
