import React, { Component } from 'react';
import '../scss/Profile.css';

const Profile=(props)=>{
    let profile = props.data.map((account)=> {
        return(
            <div className="accounts-wrapper" key={account.id}>
                <div className="profile-photo">
                    <div>头像</div>
                    <img src={account.img_src}/>
                </div>
                <div className="profile-items">
                    <div>姓名</div>
                    <div>{account.name}</div>
                </div>
                <div className="profile-items">
                    <div>所在学校</div>
                    <div>{account.school}</div>
                </div>
                <div className="profile-items">
                    <div>用户级别</div>
                    <div>{account.level}</div>
                </div>
                <div className="profile-items">
                    <div>电话</div>
                    <div>{account.tel}</div>
                </div>
            </div>
        )});

    return(
        <div>
            {profile}
        </div>
    )
};
export default Profile;