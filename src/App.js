import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import Reports from './components/pages/Reports';
import Products from './components/pages/UserProfile';
import Maps from './components/pages/Maps';
import UserProfile from './components/pages/UserProfile';
import Graphs from './components/pages/Graphs';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/userprofile' component={UserProfile} />
          <Route path='/maps' component={Maps} />
          <Route path='/graphs' component={Graphs} />
          
        </Switch>
      </Router>
      
    </>
  );
}

export default App;