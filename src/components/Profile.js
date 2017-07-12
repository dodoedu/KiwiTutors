import React from 'react';
import '../scss/Profile.css';

import arrowDown from "../icons/arrowDown.svg"
import arrowUp from "../icons/arrowUp.svg";
class Profile extends React.Component {
    state = {
        profileState: "close",
        file: '',
        imagePreviewUrl: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        /*do something with this.state.file*/
        console.log('handle uploading-', this.state.file)
    };

    handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onload = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
            reader.readAsDataURL(file)

        };
        onProfileClick = (e) => {
            let newProfileState = this.state.profileState === "close" ? "open" : "close";
            this.setState({
                profileState: newProfileState
            })
        };

        render(){
            let imagePreviewUrl = this.state.imagePreviewUrl;
            let defaultPreview=this.props.data[0].img_src;
            let imagePreview;
            if (imagePreviewUrl) {
               imagePreview = imagePreviewUrl;
            } else {
                imagePreview =defaultPreview;
            }
            let profile = this.props.data.map((account) => {
                return (
                    <div className="accounts-wrapper" key={account.id}>
                        <div className="accounts-text">我的账号</div>
                        <div className="profile-photo" onClick={this.onProfileClick}>
                            <div className="profile-photo-text">头像</div>
                            <div className="profile-photo-image"><img src={account.img_src} alt={account.name}/></div>
                            <div className="profile-photo-arrow"><img
                                src={this.state.profileState === "close" ? arrowDown : arrowUp} alt="arrow"/></div>

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
                                <img src={imagePreview} alt={account.name}/>
                                <form onSubmit={this.handleSubmit}>
                                    <input id="upload-photos-input" className="upload-photos-input" type="file"
                                           accept="image/*" name="upload-photos"
                                           onChange={this.handleImageChange}/>
                                    <div>
                                        <label htmlFor="upload-photos-input"> 选择本地照片 </label>
                                    </div>
                                    <button type='submit' onClick={this.handleSubmit}>确认上传照片</button>
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