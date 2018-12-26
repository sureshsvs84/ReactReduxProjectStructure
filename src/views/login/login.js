import React, { Component } from 'react';
import { Row, Col, Card, Tab,Tabs } from 'react-materialize';
import brand from '../../../public/assets/images/logo/login-logo.png';

class Login extends Component {
    render() {
        return (
         <Row id="login-page">
         <Col className="z-depth-4" s={12} m={6} l={4} xl={3}>
           <form className="login-form">
             <Row>
               <Col className="input-field center"s={12}>
                 <img src={ brand } alt="" className="circle responsive-img valign profile-image-login"/>
                 <p className="center login-form-text">Material Design Admin Template</p>
               </Col>
             </Row>
             <Row className="margin">
               <Col className="input-field p-0" s={12}>
                 <i className="material-icons prefix pt-5">person_outline</i>
                 <input id="username" type="text"/>
                 <label for="username" className="center-align">Username</label>
               </Col>
             </Row>
             <Row className="margin">
               <Col className="input-field p-0" s={12}>
                 <i className="material-icons prefix pt-5">lock_outline</i>
                 <input id="password" type="password"/>
                 <label for="password">Password</label>
               </Col>
             </Row>
             <Row >
               <Col className="ml-2 mt-3" s={12} m={12} l={12} > 
                 <input type="checkbox" id="remember-me" />
                 <label for="remember-me">Remember me</label>
               </Col>
             </Row>
             <Row >
               <Col className="input-field center">
                 <a href="index.html" className="btn waves-effect waves-light col s12">Login</a>
               </Col>
             </Row>
             <Row className="mb-2">
               <Col className="input-field col s6 m6 l6" s={6} m={6} l={6}>
                 <p className="margin medium-small"><a href="page-register.html">Register Now!</a></p>
               </Col>
               <Col className="input-field" s={6} m={6} l={6}>
                 <p className="margin right-align medium-small"><a href="page-forgot-password.html">Forgot password ?</a></p>
               </Col>
             </Row>
           </form>
         </Col>
       </Row>
   
        )
     }
} 
export default Login;