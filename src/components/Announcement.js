import React from 'react';
import {NavLink} from 'react-router-dom';
import "../scss/Announcement.css";

//import SVGs
import Bell from "../icons/Bell.svg";
import ShowMore from "../icons/ShowMore.svg";
import ShowLess from "../icons/ShowLess.svg"
import circle from "../icons/circle.svg";
class Announcement extends React.Component{
    state={
        announcementState:"close",
        spanText:"显示更多"

    };
    onAnnouncementClick = (e)=> {
        e.preventDefault();
        let newAnnouncementState = this.state.announcementState === "close" ? "open" : "close";


        this.setState({
            announcementState: newAnnouncementState,

        })
    };


    render() {
        let iconImage = this.state.announcementState === "close" ? ShowMore : ShowLess;
        let announcements = this.props.data.map((announcement)=>{
            return(
                <div className="navLink-wrapper" key={announcement.announcement_id}>
                <NavLink to = {`/courses/${announcement.course_id}/announcement/${announcement.announcement_id}/`} >
                <div className="announcement-items">
                    {announcement.read === false
                    ?
                    <img className="circle" src={circle} alt="circle"/>
                    :
                    <img className="style-holder" alt="circle"/>
                    }
                    <span>{announcement.announcement_title}</span>
                    <span className="announcement-time">{announcement.announcement_time}</span>
                    <span className="announcement-date">{announcement.announcement_date}</span>
                </div>
                </NavLink>
                </div>
            )
        });
        return (
            <div className="announcement-wrapper">

                <div className="announcement-title">所有公告</div>
                <div className ="announcement-bar" onClick={this.onAnnouncementClick}>
                    <img className="circle" src={circle} alt="circle"/>
                    <img className="bell" src={Bell} alt="bell"/>
                    <div>总消息 : 50</div>
                    <div className="show-more">
                        {this.state.announcementState==="close" ? <span>显示更多</span> : <span>收起</span>}
                        <img src = {iconImage} alt="icon"/>
                    </div>
                </div>
                {this.state.announcementState === "open" ? <div>{announcements}</div>:null}
            </div>
        )
    }
};

export default Announcement;