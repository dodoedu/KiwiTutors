import React from 'react';
import {NavLink,Route, Redirect,Switch} from 'react-router-dom';
import "../scss/Course.css";

import CourseAnnouncement from '../components/CourseAnnouncement';

class Course extends React.Component{
    state ={
      titleText :''

    };




    render() {
        let courseId= this.props.match.params.courseId;
        let courseName = '';

        this.props.data.map((course)=> {
        return(

            course.id === courseId ? (courseName += course.name): null
        )
        });

        return (
            <div className="course-main">
                <div className="title">
                    <span>{courseName}</span>
                    <span>{courseId}</span>
                </div>
                <div className="course-nav-bar">
                    <NavLink to={`${this.props.match.url}/announcement`} >公告</NavLink>
                    <NavLink to ={`${this.props.match.url}/PPT`}>课件</NavLink>
                    <NavLink to={`${this.props.match.url}/homework`}>作业</NavLink>
                    <NavLink to ={`${this.props.match.url}/OnlineTests`}>线上测试</NavLink>
                </div>

                <Route path = "/courses/:courseId/announcement" render = {({match})=><CourseAnnouncement match ={match}/>} />
            </div>
        )

    }
};
export default Course;