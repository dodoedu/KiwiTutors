import React from 'react';
import "../scss/Announcement.css";
import Bell from "../icons/Bell.svg";
import ShowMore from "../icons/ShowMore.svg";
import circle from "../icons/circle.svg";
class Announcement extends React.Component{
    state={
        AnnouncementState:"close",
        spanText:"显示更多"
    };
    onAnnouncementClick = (e)=>{
        let newAnnouncementState = this.state.AnnouncementState === "close" ? "open" : "close";
        let newSpanText = this.state.spanText === "显示更多" ? "显示更少" : "显示更多";
        this.setState({
            AnnouncementState:newAnnouncementState,
            spanText:newSpanText
            })


    };
    render() {
        return (
            <div>

                <div className="announcement-title">所有公告</div>
                <div className ="announcement-bar" onClick={this.onAnnouncementClick}>
                    <img className="circle" src={circle} alt="circle"/>
                    <img className="bell" src={Bell} alt="bell"/>
                    <div>总消息 : 50</div>
                    <div className="show-more">
                        <span>{this.state.spanText}</span>
                        <img src ={ShowMore} alt="icon"/>
                    </div>
                </div>
                <div>
                    {this.state.AnnouncementState === "open" ? <h1>Hello world</h1>:null}
                </div>
            </div>
        )
    }
};

export default Announcement;