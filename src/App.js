import logo from './logo.svg';
import './App.css';
//import React from 'react';
import React, { useState } from 'react';
import generateGreeting from 'random_greeting';
import generateExtendedGreeting from 'extended_greeting';



function App() {
  // const greeting = generateGreeting();
  // const extendedGreeting = generateExtendedGreeting();

  const [greeting, setGreeting] = useState('');
  const [extendedGreeting, setExtendedGreeting] = useState('');

  
  // const handleGenerateGreeting = () => {
  //   const greeting = generateGreeting();
  //   console.log(greeting);
  // };

  // const handleGenerateExtendedGreeting = () => {
  //   const extendedGreeting = generateExtendedGreeting();
  //   console.log(extendedGreeting);
  // };

  const handleGenerateGreeting = () => {
    const generatedGreeting = generateGreeting();
    setGreeting(generatedGreeting);
    console.log(generatedGreeting);
  };

  const handleGenerateExtendedGreeting = () => {
    const generatedExtendedGreeting = generateExtendedGreeting();
    setExtendedGreeting(generatedExtendedGreeting);
    console.log(generatedExtendedGreeting);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Mitt första npm projekt med React!
        </p>
        {/* <div>{greeting}</div>
        <div>{extendedGreeting}</div> */}

        <button className="generateGreeting" onClick={handleGenerateGreeting}>Generate Greeting</button>
        <div>{greeting}</div>
        <button className="generateExtendedGreeting" onClick={handleGenerateExtendedGreeting}>Generate Extended Greeting</button>
        <div>{extendedGreeting}</div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

