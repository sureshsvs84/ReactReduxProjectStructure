import React, { Component, Fragment } from 'react';
import { Col, Row, Card } from 'react-materialize';
import Routes from './routes/mainRoute';
import Header from './components/header';
import Footer from './components/footer';
import Breadcrumbs from './components/breadcrumbs';
import SideNav from "./components/sideNav";
import RightSideNav from "./components/rightSideNav";
class App extends Component {
    constructor() {
        super();
        this.state = {
            isVisableAsideLeft: false,
            isRegistration: true,
            isRightNavOpen:false

        }
    }
    toggleRightNav = () => {
        debugger;
        this.setState({ isRightNavOpen: !this.state.isRightNavOpen });
    }

    render() {
        return (
            <Fragment>
                <Header toggleRightNav={this.toggleRightNav}/> 
                <Col id="main">
                    <Col className="wrapper">
                        <aside id="left-sidebar-nav">
                            <SideNav />
                        </aside>
                        <section id="content">
                            <Breadcrumbs />
                            <Col className="container">
                                <Routes />
                            </Col>
                        </section>
                        <aside id="right-sidebar-nav">
                            <RightSideNav isRightNavOpen ={this.state.isRightNavOpen} toggleRightNav={this.toggleRightNav}/>
                        </aside>
                    </Col>
                </Col>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
