import React from 'react';
import './App.css';
import SearchPage from './SearchPage/SearchPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid="true">
      <Row>
        <Col>
          <div className="App">
            <header className="App-header">
              <Row >
                <Col>
                <div>
                <h1 className="text-center main-h1">MyReads</h1>
                </div>
                </Col>
              </Row>
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
        </Col>
      </Row>
    </Container>
  );
}

export default App;
