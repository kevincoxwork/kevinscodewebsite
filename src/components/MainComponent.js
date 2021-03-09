import React from 'react';
import Experiance from './ExperianceComponent';
import Education from './EducationComponent';
import Project from './ProjectComponent';
import Languages from './LanguagesComponent';
import styled from 'styled-components';
import {
  manulife2020,
  manulifeMay2019,
  manulife2018,
} from '../constants/jobs/manulife';
import {
  Spotify_Music_Visualizer,
  Chat_App,
  MVC_Framework,
  Remote_Threaded_Grep,
} from '../constants/projects/projects';
import {
  AllLanguages,
  Technologies,
  Database,
  Cloud,
  Testing,
} from '../constants/languages/languages';

import { Fanshawe, Western } from '../constants/education/education';

const Body = styled.div`
  width: 70vw;
  padding-left: 5vw;
  padding-top: 5vh;
  font-family: 'Roboto Mono', monospace;
  color: #D8DEE9;
  @media only screen and (max-width: 600px) {
    width: 95vw;
  }
`;

const FloatLeftDiv = styled.div`
  float: left;
  padding-right: 5vw;
  padding-bottom: 75vh;
`;
const Main = () => {
  return (
    <Body>
      <FloatLeftDiv>
        <h2>Work Experiance</h2>
        <Experiance job={manulife2020} />
        <Experiance job={manulifeMay2019} />
        <Experiance job={manulife2018} />
      </FloatLeftDiv>
      <FloatLeftDiv>
        <h2>Projects</h2>
        <Project project={Spotify_Music_Visualizer} />
        <Project project={Chat_App} />
        <Project project={MVC_Framework} />
        <Project project={Remote_Threaded_Grep} />
      </FloatLeftDiv>
      <FloatLeftDiv>
        <Languages languagesProp={AllLanguages} />
        <Languages languagesProp={Technologies} />
        <Languages languagesProp={Cloud} />
        <Languages languagesProp={Database} />
        <Languages languagesProp={Testing} />
      </FloatLeftDiv>
      <FloatLeftDiv>
        <h2>Education</h2>
        <Education education={Western} />
        <Education education={Fanshawe} />
      </FloatLeftDiv>
    </Body>
  );
};

export default Main;
