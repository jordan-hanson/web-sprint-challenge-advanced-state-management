import React from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props) => {
  console.log(props)

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand">Smurf Village Database</a>
      </nav>
      <main>
        <AddForm />
        <SmurfDisplay />
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}
export default connect(mapStateToProps)(App)
//Task List:
//1. Add in SmurfDisplay and AddForm into your application.