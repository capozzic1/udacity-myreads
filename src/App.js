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
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
  
          </ul>
        </nav>
        <Route path="/" exact component={MainPage} />
        <Route path="/search" component={SearchPage} />
      </div>
       
      </Router>
      </header>
   
    </div>
  );
}

export default App;
