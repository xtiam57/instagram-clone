import React from 'react';
import Test from 'components/Test';
import './App.css';
import logo from './logo.svg';
import usePrintArea from 'hooks/usePrintArea';

function App() {
  const { onPrint, areaRef } = usePrintArea();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onPrint}>Print now!</button>
        <div ref={areaRef}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis ullam aliquid officiis ex explicabo
            ratione beatae eos aperiam quas ad debitis, corporis nesciunt a porro similique recusandae nulla expedita?
          </p>
        </div>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Test />
      </header>
    </div>
  );
}

export default App;
