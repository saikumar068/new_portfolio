import React from 'react';
import './About.css';
import { Card } from 'react-bootstrap';

const About = () => (
  <section id="About" className="about-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card className="about-card text-center p-5 my-5">
            <Card.Body>
              <h1 className="section-title">About Me</h1>
              <div className="about-text">
                <p>
                  Hi, <strong>I’m Sai Kumar Kindigeri</strong>. I’m a passionate web developer with experience in
                  crafting dynamic and responsive web applications.
                </p>
                <div className="timeline">
                  <div className="timeline-item">
                    <h5 className="highlight">SSC</h5>
                    <p>Telangana Model School, 2017</p>
                  </div>
                  <div className="timeline-item">
                    <h5 className="highlight">Intermediate</h5>
                    <p>Telangana Model School and Junior College, 2017-2019</p>
                  </div>
                  <div className="timeline-item">
                    <h5 className="highlight">BSc MPCS</h5>
                    <p>City College, Hyderabad, 2019-2022</p>
                  </div>
                  <div className="timeline-item">
                    <h5 className="highlight">Trainee</h5>
                    <p>NxtWave, 2023</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default About;
