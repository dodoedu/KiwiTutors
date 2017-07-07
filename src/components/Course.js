
import {BrowserRouter, Route, Redirect,Switch} from 'react-router-dom' ;
import React, { Component } from 'react';

const Course = ()=>{
     return (
            <BrowserRouter>
                <div className="Course-wrapper">
                    <Switch>
                        <Route exact path = "/" render ={()=> <Redirect to = "/courses" /> } />
                    </Switch>
                </div>
            </BrowserRouter>
     );
};


export default Course;
