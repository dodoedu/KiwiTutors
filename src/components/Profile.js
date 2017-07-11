import React from 'react';
import '../scss/Profile.css';

import arrowDown from "../icons/arrowDown.svg"
import arrowUp from "../icons/arrowUp.svg";
class Profile extends React.Component {
    state={
      profileState:"close",
    };
    onProfileClick=(e)=>{
        let newProfileState= this.state.profileState === "close" ? "open" : "close";
        this.setState({
            profileState:newProfileState
        })
    };
    preventDefault=(e)=>{
        e.preventDefault();
    };


    render() {

        let profile = this.props.data.map((account) => {
            return (
                <div className="accounts-wrapper" key={account.id}>
                    <div className="accounts-text">我的账号 </div>
                    <div className="profile-photo" onClick= {this.onProfileClick}>
                        <div className="profile-photo-text">头像</div>
                        <div className= "profile-photo-image"> <img src={account.img_src} alt={account.name}/> </div>
                        <div className="profile-photo-arrow"> <img src = {this.state.profileState==="close" ? arrowDown : arrowUp} alt="arrow"/> </div>

                    </div>
                    {this.state.profileState === "close"
                        ?
                        <div className="profile-items-wrapper">
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
                        :

                        <div className="upload-photos">
                                <div className="upload-photos-description"> 修改头像</div>
                                <img src = {account.img_src} alt={account.name}/>
                                <form method="" action="">
                                <input id ="upload-photos-input" className="upload-photos-input" type="file" accept="image/*" name="upload-photos" />
                                    <div><label htmlFor ="upload-photos-input"> 选择本地照片 </label> </div>
                                    <button onClick={this.preventDefault}>确认上传照片</button>
                                </form>
                        </div>
                    }

                </div>
            )
        });
        return (
            <div className="profile-wrapper">
                {profile}
            </div>
        )
    }
}
export default Profile;