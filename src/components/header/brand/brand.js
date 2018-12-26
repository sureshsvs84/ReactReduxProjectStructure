/* eslint-disable linebreak-style */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
          <Fragment>
            <ul className="left">
              <li>
                <h1 className="logo-wrapper">
                  <a href="index-2.html" className="brand-logo darken-1">
                    <img src={ this.props.brand } alt="materialize logo"/>
                    <span className="logo-text hide-on-med-and-down">Materialize</span>
                  </a>
                </h1>
              </li>
            </ul>
          </Fragment>
        );
    }
}


export default (Brand);