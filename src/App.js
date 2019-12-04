import React from 'react';
import './App.css';
import Navigation from "./Layout/Navigation";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactForm from './Pages/contactForm';
import AboutPage from './Pages/aboutPage';
import Home from './Pages/Home';
import BatPage from "./Pages/batPage";

function App() {
    return (
        <div className="app">
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/bats" component={BatPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/contact" component={ContactForm}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
