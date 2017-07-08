import React from 'react';

import "../scss/Course.css";

class Course extends React.Component{
    state ={
        expandAnnounceState:false
    };
    onAnnouncementClick =(e)=>{
        let newExpandAnounceState = this.state.expandAnnounceState ? false : true;

        this.setState({expandAnnounceState:newExpandAnounceState})
    };



    render() {
        let courseId= this.props.match.params.courseId;
        let courses = this.props.data;
        let announcementMessage= courses.map( (props) => {
            return(
                <div key = {props.id}>
                    {courseId === props.id ?
                        <div>
                            {props.announcement.map((props)=>{
                                return(
                                <div className="announcement-message-bar" key={props.announcement_id}>
                                    <span>{props.announcement_title}</span>
                                    <span className="announcement-date">{props.announcement_date}</span>
                                    <span>{props.announcement_time}</span>
                                </div>
                                )
                            }
                            )}
                        </div>
                        :
                        null}
                </div>
            );
        });

        return (
            <div>
                <div className="course-nav-bar">
                    <span onClick={this.onAnnouncementClick}>公告</span>
                    <span>PPT</span>
                    <span>作业</span>
                    <span>线上测试</span>
                </div>
                {this.state.expandAnnounceState? <div>{announcementMessage}</div> : null}
            </div>
        )

    }
};
export default Course;