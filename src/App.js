import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Redirect,Switch} from 'react-router-dom' ;
import NavBar from './components/NavBar';
import Courses from './components/Courses';
import Profile from './components/Profile';
import Announcement from './components/Announcement';
/*import data*/
import coursesData from './data/coursesData';
import accountsData from './data/accountsData';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="wrapper">
             <div className="nav-wrapper">
                 <NavBar />
              </div>
              <Switch>
                  <Route exact path = "/" render ={()=> <Redirect to = "/courses" /> } />
                  <Route exact path = "/courses" render ={( {match} )=> <Courses data = {coursesData} /> } />

                  <Route path = "/Announcement" render ={()=> <Announcement data ={coursesData}/>} />
                  <Route path = "/Profile" render ={()=> <Profile data ={accountsData}/>} />
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
