import React, {Component}from 'react';

import announcementData from '../data/annoucncementData';
import courseData from '../data/coursesData';
import '../scss/AnnouncementDetail.css' ;


class AnnouncementDetail extends Component{
    render(){
        let courseUniqueId =this.props.match.params.courseId;
        let announcementId = this.props.match.params.announcementId;
        let courseName = courseData.map((course)=>{
            if( course.id === courseUniqueId){
                return(
                    <div className="course-name" key= {course.id}>
                    <div> {course.name} </div>
                    <div> {course.id}</div>
                    <div className="course-name-text"> 公告 </div>
                    </div>
                )
            }else{
                return null;
            }
        });
        let announcement = announcementData.map((announce)=>{
           if(announce.announcement_id === announcementId) {
               return (
                   <div className="announcement-content" key={announce.announcement_id}>
                       <div className="announcement-content-bar">
                           <div className="title">{announce.announcement_title}</div>
                           <div className="person">{announce.person}</div>
                           <div className="time">{announce.announcement_time}</div>
                           <div className="date">{announce.announcement_date}</div>
                       </div>
                           <div className="message-wrapper">
                           <div className="message">{announce.text_message}</div>
                       </div>
                   </div>
               )
           }else{
                   return null
               }
           });

        return(
            <div className="announcement-details-page">
                <div>
                    {courseName}
                </div>
                <div>{announcement}</div>
            </div>
        )
    }

}

export default AnnouncementDetail;