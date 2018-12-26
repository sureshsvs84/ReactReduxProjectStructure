
import React, { Component, Fragment } from "react";
import { Col, Row , Tabs,Tab } from "react-materialize";

class RightSideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideNavOpen: false
        };
    }
    // toggleProfileBtn = () => {
    //     debugger;
    //     this.setState({ isSideNavOpen: !this.state.isSideNavOpen });
    // }
    render() {
        debugger;
        const {isRightNavOpen, toggleRightNav } = this.props;
        return (
            <Fragment>
               
                <ul id="chat-out" class={isRightNavOpen ? "side-nav rightside-navigation right-aligned right-navout" : "side-nav rightside-navigation right-aligned"}>
                    <li class="li-hover">
                        <div class="row">
                            <div class="col s12 border-bottom-1 mt-5">
                                <ul class="tabs">
                                    <li class="tab col s4">
                                        <a href="#activity" class="active">
                                            <span class="material-icons">graphic_eq</span>
                                        </a>
                                    </li>
                                    <li class="tab col s4">
                                        <a href="#chatapp">
                                            <span class="material-icons">face</span>
                                        </a>
                                    </li>
                                    <li class="tab col s4">
                                        <a href="#settings">
                                            <span class="material-icons">settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div id="settings" class="col s12">
                                <h6 class="mt-5 mb-3 ml-3">GENERAL SETTINGS</h6>
                                <ul class="collection border-none">
                                    <li class="collection-item border-none">
                                        <div class="m-0">
                                            <span class="font-weight-600">Notifications</span>
                                            <div class="switch right">
                                                <label>
                                                    <input checked type="checkbox" />
                                                    <span class="lever"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <p>Use checkboxes when looking for yes or no answers.</p>
                                    </li>
                                </ul>
                            </div>
                            <div id="chatapp" class="col s12">
                                <div class="collection border-none">
                                    <a href="#!" class="collection-item avatar border-none">
                                        <img src="images/avatar/avatar-1.png" alt="" class="circle cyan" />
                                        <span class="line-height-0">Elizabeth Elliott </span>
                                        <span class="medium-small right blue-grey-text text-lighten-3">5.00 AM</span>
                                        <p class="medium-small blue-grey-text text-lighten-3">Thank you </p>
                                    </a>
                                    <a href="#!" class="collection-item avatar border-none">
                                        <img src="images/avatar/avatar-2.png" alt="" class="circle deep-orange accent-2" />
                                        <span class="line-height-0">Mary Adams </span>
                                        <span class="medium-small right blue-grey-text text-lighten-3">4.14 AM</span>
                                        <p class="medium-small blue-grey-text text-lighten-3">Hello Boo </p>
                                    </a>

                                </div>
                            </div>
                            <div id="activity" class="col s12">
                                <h6 class="mt-5 mb-3 ml-3">RECENT ACTIVITY</h6>
                                <div class="activity">
                                    <div class="col s3 mt-2 center-align recent-activity-list-icon">
                                        <i class="material-icons white-text icon-bg-color deep-purple lighten-2">add_shopping_cart</i>
                                    </div>
                                    <div class="col s9 recent-activity-list-text">
                                        <a href="#" class="deep-purple-text medium-small">just now</a>
                                        <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jim Doe Purchased new equipments for zonal office.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </li>              
          </ul>
       
            { isRightNavOpen ? <div id="rightSide-overlay" onClick={toggleRightNav}></div> : null } 
    </Fragment >
    );
    }
}
export default RightSideNav;