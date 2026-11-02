import React from "react";
import "./App.css";

function Employee(props) {
  return (
    <div className="employee-card">
      <img
        src={props.photo}
        alt={props.name}
        className="employee-photo"
      />

      <h2>{props.name}</h2>
      <p>Employee ID: {props.id}</p>
      <p>Department: {props.department}</p>
      <p>Designation: {props.designation}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Employee Directory Portal</h1>

      <div className="employee-list">
        <Employee
          name="Jahnavi Thondavan"
          id="101"
          department="IT"
          designation="Developer"
          photo="/photos/Jahnavi.jpg"
        />

        <Employee
          name="Shaik Sameena"
          id="102"
          department="Cyber Security"
          designation="Analyst"
          photo="/photos/Sameena.jpg"
        />

        <Employee
          name="Vaishno Hasritha"
          id="103"
          department="Finance"
          designation="Accountant"
          photo="/photos/Vaishno.jpg"
        />
      </div>
    </div>
  );
}

export default App;