import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/sass/main.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const Main = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Footer />
      </Router>
    </div>
  );
}

export default Main;
