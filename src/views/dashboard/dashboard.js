import React, { Fragment }from 'react';
import ReactDom from 'react-dom';
import { Row, Col,Card,Input,Tabs,Tab } from 'react-materialize';
import Search from '../../components/search/search';

class Dashboard extends React.Component {
    render() {
       return (
          <Fragment>
         
             <Row>
          
                <Col s={12} m={6} l={4} xl={4}>
                     <Card className='white' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
                     I am a very simple card.
                     </Card>
                  </Col>
                  <Col s={12} m={6} l={4} xl={4} className="mt-1">
                   <Tabs className='tab-demo z-depth-1'>
                        <Tab title="Test 1">
                        <Card >Test 1</Card></Tab>
                        <Tab title="Test 2" active>  <Card >Test 2</Card></Tab>
                        <Tab title="Test 3">  <Card >Test 3</Card></Tab>
                        <Tab title="Test 4">  <Card >Test 4</Card></Tab>
               </Tabs>
                </Col>
           
             </Row>
         
         <Row>
         <Card className='white pl-1's={12} m={6} l={4} xl={4} >
            <Input placeholder="Placeholder" s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
            <Input type="password" label="password" s={12} />
            <Input type="email" label="Email" validate  s={12} />
         </Card>
         </Row>
         <Row>
         
         </Row>
         </Fragment>
       )
    }
 }

export default Dashboard;