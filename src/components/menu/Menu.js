import React, { Component } from 'react';
import '../../css/Menu.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super(props);
    }
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

                </div>
            </Router>
        )
    }
}

export default Menu;