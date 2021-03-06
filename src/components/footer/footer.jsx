import React,{ Fragment }from 'react';
class Footer extends React.Component{
    render(){
        return(
            <Fragment>
            <footer className="page-footer">
              <div className="footer-copyright">
                <div className="container">
                  <span>Copyright © 2018
                        <a className="grey-text text-lighten-4" href="#" >NETSERV</a> All rights reserved.</span>
                  <span className="right hide-on-small-only"> Design and Developed by <a className="grey-text text-lighten-4" href="#">NETSERV</a></span>
                </div>
              </div>
            </footer>
          </Fragment>
        )
    }
}

export default Footer; 
