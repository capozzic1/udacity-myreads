import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchPage from './SearchPage/SearchPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
 
      </header>
      <Router>
        <Route path="/" exact component={MainPage} />
      </Router>
    </div>
  );
}

export default App;
