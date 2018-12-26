import React from 'react';
import ReactDom from 'react-dom';
import { Col } from 'react-materialize';
import Search from '../../components/search/search';

class Dashboard extends React.Component {
    render() {
       return (
          <section>
             <Col className="col-md-9">
             <Search/>
             </Col>
             <Col className="col-md-3">
              
             </Col>
          </section>
           
       )
    }
 }

export default Dashboard;