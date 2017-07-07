import React from 'react';
import {NavLink} from 'react-router-dom';
import '../scss/NavBar.css';
import Announcement from '../icons/Announcement.svg';
import NavContents from '../components/NavContents';


class NavBar extends React.Component {
    state ={
        menuState: "close"
    };
    onMenuClick=(e)=>{
        let newState = this.state.menuState === "close" ? "open" : "close";
        this.setState({menuState:newState});

        };

    render(){

        return (
                <div className="nav">
                    <div className="nav-bar" >
                        <div className="drop-down-icon" onClick = {this.onMenuClick}>
                            <div className="drop-down-wrapper">
                                <div className="drop-down-line"></div>
                                <div className="drop-down-line"></div>
                                <div className="drop-down-line"></div>
                            </div>
                        </div>
                        <div className="brand-name"> 作作学习管理系统</div>
                        <div className="school-logo"><img src={Announcement}/></div>
                    </div>
                    {this.state.menuState ==="close" ? null: <div onClick={this.onMenuClick}> <NavContents/> </div>}
                </div>
        )
    }
}


export default NavBar;
