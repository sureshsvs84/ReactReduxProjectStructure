/* eslint-disable linebreak-style */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Headersearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
          <Fragment>
             <div className="header-search-wrapper hide-on-med-and-down sideNav-lock">
                                <i className="material-icons">search</i>
                <input type="text" name="Search" className="header-search-input z-depth-2" placeholder="Explore Materialize" />
            </div>
          </Fragment>
        );
    }
}


export default (Headersearch);