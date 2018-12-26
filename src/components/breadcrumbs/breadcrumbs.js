/* eslint-disable linebreak-style */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Navbar, NavItem, Icon, Dropdown, Button,Col,Row } from "react-materialize";

class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {          
        };
    }
    render() {

        return (
          <Fragment>          
          <div id="breadcrumbs-wrapper">       
             <div className="container">
              <div className="row">
                <div className="col s10 m6 l6">
                  <h5 className="breadcrumbs-title">Blank Page</h5>
                  <ol className="breadcrumbs">
                    <li><a href="index-2.html">Dashboard</a></li>
                    <li><a href="#">Pages</a></li>
                    <li className="active">Blank Page</li>
                  </ol>
                </div>
                
              </div>
            </div>
          </div>
        </Fragment>
        );
    }
}


export default (Breadcrumbs);