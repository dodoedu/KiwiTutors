import React from 'react';


/* import data*/
import announcementData from '../data/annoucncementData';
import coursesData from '../data/coursesData';
/*import images*/
import circle from "../icons/circle.svg";
import {NavLink} from 'react-router-dom';
import "../scss/CourseAnnouncement.css";
class CourseAnnouncement extends React.Component{


    render() {
        let courseId = this.props.match.params.courseId;
        let courseName ='';

        coursesData.map((course)=> {
                course.id === courseId ? courseName += course.name: null;
        });

        let announcements=[];
        announcementData.map((announcement)=>{
            announcement.course_id === courseId ? announcements.push(announcement):null;
        });
        let pageContents = announcements.map((announcement)=>{
            return (
                <div key={announcement.announcement_id}>
                    <NavLink to={`${this.props.match.url}/${announcement.announcement_id}`} >

                            {announcement.read === false
                                ?
                                <img className="circle" src={circle} alt="circle"/>
                                :
                                <img className="style-holder" alt="circle"/>
                            }
                            <span className="bar-title">{announcement.announcement_title}</span>
                            <span className="bar-person">  {announcement.person} </span>
                            <span className="bar-date">{announcement.announcement_date} </span>
                    </NavLink>
                </div>


            )
        });

        return(
            <div className="course-announcement">
                {pageContents}
            </div>
        )
    }

}

export default CourseAnnouncement;
