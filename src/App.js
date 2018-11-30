import React, { Component } from 'react';
import './css/App.css';
import Home from './components/home/Home.js';
import Contact from './components/contact/Contact.js'
import About from './components/contact/Contact.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (

      <Router>
      
        <div>
        <nav className="menu">
                        <ul>
                            <li> <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/About/">About</Link>
                            </li>

                            <li>
                                <Link to="/contact/">Contact</Link>
                            </li>
                        </ul>
                    </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />

        </div>
      </Router>
    )
  }
}


export default App;
