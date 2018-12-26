import React, { Component, Fragment } from "react";
import { Col } from 'react-materialize';
import logo from "../../../public/assets/images/logo/materialize-logo.png";
import profileImg from "../../../public/assets/images/avatar/avatar-7.png";
import Brand from "./brand/brand";
import Headersearch from "./headersearch";
import UserMenu from "./userMenu";
import Notification from "../notification";

const HeaderMenu = (props) => {
    debugger;
    return (
        <ul className="right hide-on-med-and-down">
            <li>
                <a href="javascript:void(0);" className="waves-effect waves-block waves-light toggle-fullscreen">
                    <i className="material-icons">settings_overscan</i>
                </a>
            </li>
            <li>
                <a onClick={props.toggleNotifi} className="waves-effect waves-block waves-light notification-button" data-activates="notifications-dropdown">
                    <i className="material-icons">notifications_none
                    <small className="notification-badge pink accent-2">5</small>
                    </i>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" onClick={props.toggleProfile} className="waves-effect waves-block waves-light profile-button" data-activates="profile-dropdown">
                    <span className="avatar-status avatar-online">
                        <img src={props.profileImg} alt="avatar" />
                        <i></i>
                    </span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" onClick={props.toggleRightNav} data-activates="chat-out" className="waves-effect waves-block waves-light chat-collapse">
                    <i className="material-icons">format_indent_increase</i>
                </a>
            </li>
        </ul>
    );
}
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNotificationOpen: false,
            isdropDownOpen: false
        };
    }

    toggleNotification = () => {
        debugger;
        this.setState({ isNotificationOpen: !this.state.isNotificationOpen });
    }
    toggleProfileDropDown = () => {
        debugger;
        this.setState({ isdropDownOpen: !this.state.isdropDownOpen });
    }
    
    render() {
         const { toggleRightNav } = this.props;
        return (
            <Fragment>
                <header id="header" className="page-topbar">
                    <Col className="navbar-fixed">
                        <nav className="navbar-color">
                            <Col className="nav-wrapper">
                                <Brand brand={logo}/>
                                <Headersearch />
                                <HeaderMenu profileImg={profileImg} toggleNotifi={this.toggleNotification} toggleProfile={this.toggleProfileDropDown} toggleRightNav={toggleRightNav} />
                                <Notification isNotification={this.state.isNotificationOpen}  />
                                <UserMenu isprofileDropDown={this.state.isdropDownOpen}  />
                               
                            </Col>
                        </nav>
                    </Col>
                </header>
                {this.state.isNotificationOpen ? <Col id="overlay" onClick={this.toggleNotification}></Col> : this.state.isdropDownOpen ? <Col id="overlay" onClick={this.toggleProfileDropDown}></Col> : null} 
            </Fragment>
        );
    }
}

Header.propTypes = {
};
Header.defaultProps = {

};

export default (Header);