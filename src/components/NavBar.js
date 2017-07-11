import React from 'react';

import '../scss/NavBar.css';

import NavContents from '../components/NavContents';

import schoolLogo from '../icons/images/schoolLogo.svg'
class NavBar extends React.Component {
    state ={
        menuState: true
    };
    onMenuClick=(e)=>{
        let newState = this.state.menuState !== true;
        this.setState({menuState:newState});

        };

    render(){

        return (
                <div className="nav-wrapper">
                    <div className="nav-bar">
                        <div className="drop-down-icon" onClick = {this.onMenuClick}>
                            <div className="drop-down-wrapper" >
                                <div className="drop-down-line" > {null}</div>
                                <div className="drop-down-line" > {null}</div>
                                <div className="drop-down-line" > {null}</div>
                            </div>
                        </div>
                        <div className="brand-name"> 作作教学</div>
                        <div className="nav-contents"><NavContents/></div>
                        <div className="school-logo"><img src={schoolLogo} alt="announcement"/></div>

                    </div>
                    {this.state.menuState ===true ? null: <div className="mobile-phone-menu" onClick={this.onMenuClick}> <NavContents/> </div>}
                </div>
        )
    }
}


export default NavBar;
