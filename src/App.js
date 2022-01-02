// import logo from './logo.svg';

import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
      fetch('https://randomuser.me/api/?results=500')
      .then(res => res.json())
      .then(data => setUser(data.results))
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>I'm a react person</h1>
        {
          // eslint-disable-next-line array-callback-return
          user.map(singleUer => 
            <Person name={singleUer} key={singleUer.email}></Person>)
        }
      </header>
    </div>
  );
}
function Person(props){
  console.log(props.name);
  const {title, first, last} = props.name.name;
  return (
    <div style={{border: '3px solid red', margin: '20px', width: "400px"}}>
      <h4>{title + " " + first + " " + last}</h4>
      <p>his or her age {props.name.dob.age}</p>
    </div>
  );
}
export default App;
