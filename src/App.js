import React, { Component } from 'react';

import './App.css';
import {BrowserRouter, Route, Redirect,Switch} from 'react-router-dom' ;
/*import components*/
import NavBar from './components/NavBar';
import Courses from './components/Courses';
import Profile from './components/Profile';
import Announcement from './components/Announcement';
import Course from './components/Course';
import AnnouncementDetail from './components/AnnouncementDetail';


/*import data*/
import coursesData from './data/coursesData';
import accountsData from './data/accountsData';
import announcementData from './data/annoucncementData';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="wrapper clear-fix">
                 <NavBar />

              <Switch>
                  <Route exact path = "/" render ={()=> <Redirect to = "/courses" /> } />
                  <Route exact path = "/courses" render ={( {match} )=> <Courses data = {coursesData} /> } />

                  <Route path = "/Announcement"
                         render ={({match})=>
                             <Announcement data ={announcementData} match={match}/>} />
                  <Route path = "/Profile" render ={()=> <Profile data ={accountsData}/>} />

                  <Route exact path = "/courses/:courseId/announcement/:announcementId"
                         render={({match})=><AnnouncementDetail match={match} />}/>

                  <Route path = "/courses/:courseId" render={({match})=><Course data={coursesData} match={match} />}/>


              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
