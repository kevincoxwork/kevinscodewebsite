import React from 'react';
import Experience from './ExperienceComponent';
import Education from './EducationComponent';
import Project from './ProjectComponent';
import Languages from './LanguagesComponent';
import styled from 'styled-components';
import {
  manulife2020,
  manulifeInvestmentsCoop,
} from '../constants/jobs/manulife';
import { RBC2021 } from '../constants/jobs/rbc';
import { AMZN2022 } from '../constants/jobs/amazon';
import {
  Spotify_Music_Visualizer,
  Chat_App,
  Maze_Builder,
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
  color: #d8dee9;
  @media only screen and (max-width: 600px) {
    width: 95vw;
    font-size: 5vw;
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
        <h2>Work Experience</h2>
        <Experience job={AMZN2022} />
        <Experience job={RBC2021} />
        <Experience job={manulife2020} />
        <Experience job={manulifeInvestmentsCoop} />
      </FloatLeftDiv>
      <FloatLeftDiv>
        <h2>Projects</h2>
        <Project project={Spotify_Music_Visualizer} />
        <Project project={Chat_App} />
        <Project project={Maze_Builder} />
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
