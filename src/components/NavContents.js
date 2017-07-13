
import React from 'react';
import {NavLink} from 'react-router-dom';
import '../scss/NavContents.css';
import Essay from '../icons/Essay.svg';
import Profile from '../icons/Profile.svg';
import Shop from '../icons/Shop.svg';
import TimeTable from '../icons/TimeTable.svg';
import Courses from '../icons/Courses.svg';
import Announcement from '../icons/Announcement.svg';


class NavContents extends React.Component{

     render() {
         return(
             <div className="nav-sub">
                 <ul>
                     <li><NavLink to="/Profile"><img src={Profile} alt="icon"/> <span>我的账号</span></NavLink></li>
                     <li><NavLink to="/Announcement"><img src={Announcement} alt="icon"/> 我的公告 </NavLink></li>
                     <li><NavLink to="/courses"><img src={Courses} alt="icon"/> 我的课程 </NavLink></li>
                     <li><NavLink to="/s"><img src={TimeTable} alt="icon"/> 我的课表 </NavLink></li>
                     <li><NavLink to="/d"><img src={Essay} alt="icon"/> 写作批改 </NavLink></li>
                     <li><NavLink to="/e"><img src={Shop} alt="icon"/> 课程商城 </NavLink></li>
                 </ul>

            </div>
         )
     }
};
export default NavContents;