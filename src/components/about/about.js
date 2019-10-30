import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic2.jpg" alt="photo" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I'm passionate about Computer Software development, looking always for different and most efficient solutions to daily problems of clients. An enthusiast of new technologies and creations in Software development. Always growing as a person and as a co-worker, looking forward to giving my best for the team. 
</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Vishnu.s</span><br />
                  <span>Vikas(Ho)<br />
                    Near lakshmi auditorium,Manjeri(p.0)
                  </span><br />
                  <span>Malappuram(D.T) ,Kerala</span><br />
                  <span>PIN-676121</span><br />
                  <span>CONTACT-+91-9037824920</span><br />
                  <span>MAIL-vish29vikas@gmail.com</span><br />
                  
                </p>
              </div>
              <div className="columns download">
               {/* <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
               </p>*/}
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}