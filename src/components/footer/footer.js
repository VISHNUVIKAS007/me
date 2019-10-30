import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/vishnusvikas/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/VISHNUVIKAS007"><i className="fa fa-github" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019</li>
              <li>Design by <a title="Styleshout" href="https://github.com/VISHNUVIKAS007">oldMonk</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}