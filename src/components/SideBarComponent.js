import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import PrintIcon from '@material-ui/icons/Print';
import MailIcon from '@material-ui/icons/Mail';
import Photo from '../resources/me.png';

const RoundedImage = styled.img`
  border-radius: 2vw;
  width: 10vw;
`;

const CenteredText = styled.div`
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #D8DEE9;
  @media only screen and (max-width: 600px) {
    position: inherit;
    top: 0%;
    transform: translate(0%, 0%);
  }
`;

const OuterDiv = styled(Paper)`
  background-color: #4C566A !important;
  height: 100%;
  width: 10vw;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding-left: 5vw;
  margin-right: 0vw;
  
  .desktop-print {
    display: block;
  }

  @media only screen and (max-width: 600px) {
    width: 100vw;
    z-index: 0;
    position: inherit;
    padding-left: 0vw;
    padding-right: 0vw;
    padding-bottom: 2vh;
    .desktop-print {
      display: none;
    }
  }
`;
const IconSizes = styled.div`
  a {
    text-decoration: none;
    color: #D8DEE9;
   
  }
  .external-icon {
    font-size: 1.2em;
    padding-right 5%;;
  }
`;

const PrintIconStyled = styled(PrintIcon)`
  padding: 2%;
  font-size: 1.6rem;
  vertical-align: middle;
`;

const SideBarComponent = () => {
  return (
    <OuterDiv>
      <CenteredText>
        <h2>kevinscode.ca</h2>
        <RoundedImage src={Photo} />
        <p>Kevin Cox</p>
        <p>Software Developer</p>
        <p>Waterloo, Ontario</p>
        <IconSizes>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/kevinscode/"
          >
            <i className="external-icon devicon-linkedin-plain"></i>
          </a>
          <a target="__blank" href="https://github.com/kevincoxwork/">
            <i className="external-icon devicon-github-plain"></i>
          </a>
          <a href="mailto:kevin.cox.work@gmail.com">
            <MailIcon
              style={{ fontSize: '1.6rem', verticalAlign: 'sub' }}
            />
          </a>
          <br />
          <p className="desktop-print">
            <a target="__blank" href="/files/kevin_cox_resume.pdf">
              Print-Ready Resume
              <PrintIconStyled />
            </a>
          </p>
        </IconSizes>
      </CenteredText>
    </OuterDiv>
  );
};

export default SideBarComponent;
