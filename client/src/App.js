import React, { useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props) => {
  console.log(props)

  // useEffect(() => {
  //   props.getSmurf();
  //   console.log("test");
  // }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand">Smurf Village Database</a>
      </nav>
      <main>
        <AddForm />
        {/* <SmurfDisplay smurfsProp={props.smurfs} /> */}
      </main>
    </div>
  );
}

export default App;
//Task List:
//1. Add in SmurfDisplay and AddForm into your application.