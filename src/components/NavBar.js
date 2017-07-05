import React from 'react';
import {NavLink} from 'react-router-dom';
import '../scss/NavBar.css';
import Announcement from '../icons/Announcement.svg';
import Essay from '../icons/Essay.svg';
import Profile from '../icons/Profile.svg';
import Shop from '../icons/Shop.svg';
import TimeTable from '../icons/TimeTable.svg';
import Courses from '../icons/Courses.svg'
import IeltsLogo from '../icons/IeltsLogo.svg';

const NavBar = ()=> {
    return(
        <div className ="NavBar">

                <NavLink to ="/d" className="DropDownMenu">
                    <div className="DropDown-Wrapper">
                        <div className="DropDown"> </div>
                        <div className="DropDown"> </div>
                        <div className="DropDown"> </div>
                    </div>
                    <div className="Nav-Content">
                        <div className="Nav-Sub">
                            <ul>
                                <li><NavLink to=""><img src = {Profile} /> 我的账号 </NavLink></li>
                                <li><NavLink to=""><img src = {Announcement} /> 我的公告 </NavLink></li>
                                <li><NavLink to=""><img src = {Courses} /> 我的课程 </NavLink></li>
                                <li><NavLink to=""><img src = {TimeTable} /> 我的课表 </NavLink></li>
                                <li><NavLink to=""><img src = {Essay} /> 写作批改 </NavLink></li>
                                <li><NavLink to=""><img src = {Shop} /> 课程商城 </NavLink></li>
                            </ul>
                        </div>
                    </div>
                </NavLink>
                <div className="BrandName"> 作作学习管理系统 </div>
                <div className="School-logo"> <img src = {Announcement}/> </div>
            {/*<ul>

                <li><NavLink to=""><img src = {Profile} /> 我的账号 </NavLink></li>
                <li><NavLink to="">我的公告 </NavLink></li>
                <li><NavLink to="">我的课程 </NavLink></li>
                <li><NavLink to="">我的课表 </NavLink></li>
                <li><NavLink to="">写作批改 </NavLink></li>
                <li><NavLink to="">课程商城 </NavLink></li>
            </ul>
            */}
        </div>
    )

};
export default NavBar;