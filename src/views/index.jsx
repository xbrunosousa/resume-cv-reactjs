import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'assets/scss/app.scss';
import api from 'services/api';
import Loading from 'components/loading';
import Education from 'components/Education';
import WorkExperience from 'components/WorkExperience';
import Skills from 'components/Skills';
import ReactGA from 'react-ga';

export default () => {
  const [cv, setCvData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    setIsLoading(true);
    api
      .get('/5a5e38f3330000b0261923a5')
      .then(res => {
        console.log(res.data);
        setCvData(res.data);
      })
      .finally(() => setIsLoading(false));
    ReactGA.initialize('UA-121994767-1'); // Google Analytics
    ReactGA.pageview(window.location.pathname + window.location.search); // Google Analytics
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Container key={Math.random()}>
          <Row>
            {/* Left Column */}
            <Col md={{ offset: 1, size: 4 }} className='leftColumn'>
              <div className='avatar'>
                <img
                  className='avatarImg'
                  src={cv.profile.image + '?raw=true'}
                  alt='Avatar'
                />{' '}
                {/* Add 'raw' parameter to github url */}
              </div>
              <p className='name'>{cv.profile.name}</p>
              <p className='profession'>{cv.profile.profession}</p>
              <div className='lineLeft' />
              <p className='profile'>Profile</p>
              <hr className='hrLeft' />
              <p className='descript'>{cv.profile.description + '.'}</p>

              <p className='contact'>Contact</p>
              <hr className='hrLeft' />
              <p className='tel'>{cv.profile.contact.tel}</p>
              <p className='cel'>{cv.profile.contact.cel}</p>
              <p className='address'>{cv.profile.contact.address}</p>
              <p className='website'>{cv.profile.contact.website}</p>
              <p className='mail'>{cv.profile.contact.mail}</p>
              <p className='skills'>Skills</p>
              <hr className='hrLeft' />
              {cv.profile.skills.map((skill, key) => (
                <Skills key={key} name={skill.name} value={skill.value} />
              ))}
            </Col>
            {/* /Left Column */}

            {/* Right Column */}
            <Col md='6' className='rightColumn'>
              <p className='workExperience'>Work Experience</p>
              <hr className='hrRight' />

              {cv.profile.experience.map((experience, key) => (
                <WorkExperience
                  key={key}
                  name={experience.name}
                  date={experience.date}
                  description={experience.description}
                />
              ))}

              <p className='education'>EDUCATION</p>
              <hr className='hrRight' />

              {cv.profile.education.map((education, key) => (
                <Education
                  key={key}
                  name={education.name}
                  date={education.date}
                  description={education.description}
                />
              ))}
            </Col>
            {/* /Right Column */}
          </Row>
        </Container>
      )}
    </div>
  );
};
