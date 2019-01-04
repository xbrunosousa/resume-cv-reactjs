import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import API from '../../services/api';
import Loading from '../loading/Loading';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import ReactGA from 'react-ga';

class App extends Component {
  state = {
    cv: []
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${API}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cv: [res],
          isLoading: false
        });
      });
    ReactGA.initialize('UA-121994767-1'); // Google Analytics
    ReactGA.pageview(window.location.pathname + window.location.search); // Google Analytics
  }

  render() {
    // Shows load screen if API data has not yet been loaded
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    return (
      // Render page
      <div>{this.renderList()}</div>
    );
  }

  renderList() {
    // Page
    const page = this.state.cv.map(cv => {
      return (
        <Container key={App}>
          <Row>
            {/* Left Column */}
            <Col md={{ offset: 1, size: 4 }} className="leftColumn">
              <div className="avatar">
                <img
                  className="avatarImg"
                  src={cv.profile.image + '?raw=true'}
                  alt="Avatar"
                />{' '}
                {/* Add 'raw' parameter to github url */}
              </div>
              <p className="name">{cv.profile.name}</p>
              <p className="profession">{cv.profile.profession}</p>
              <div className="lineLeft" />
              <p className="profile">Profile</p>
              <hr className="hrLeft" />
              <p className="descript">{cv.profile.description + '.'}</p>{' '}
              {/* add end point */}
              <p className="contact">Contact</p>
              <hr className="hrLeft" />
              <p className="tel">{cv.profile.contact.tel}</p>
              <p className="cel">{cv.profile.contact.cel}</p>
              <p className="address">{cv.profile.contact.address}</p>
              <p className="website">{cv.profile.contact.website}</p>
              <p className="mail">{cv.profile.contact.mail}</p>
              <p className="skills">Skills</p>
              <hr className="hrLeft" />
              {cv.profile.skills.map((skill, key) => {
                return (
                  <Skills key={key} name={skill.name} value={skill.value} />
                );
              })}
            </Col>
            {/* /Left Column */}

            {/* Right Column */}
            <Col md="6" className="rightColumn">
              <p className="workExperience">Work Experience</p>
              <hr className="hrRight" />

              {cv.profile.experience.map((experience, key) => {
                return (
                  <WorkExperience
                    key={key}
                    name={experience.name}
                    date={experience.date}
                    description={experience.description}
                  />
                );
              })}

              <p className="education">EDUCATION</p>
              <hr className="hrRight" />

              {cv.profile.education.map((education, key) => {
                return (
                  <Education
                    key={key}
                    name={education.name}
                    date={education.date}
                    description={education.description}
                  />
                );
              })}
            </Col>
            {/* /Right Column */}
          </Row>
        </Container>
      );
    });
    return page;
  }
}

export default App;
