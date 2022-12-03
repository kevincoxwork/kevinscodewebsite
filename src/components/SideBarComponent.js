import React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import PrintIcon from '@mui/icons-material/Print';
import MailIcon from '@mui/icons-material/Mail';

const CenteredText = styled.div`
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #D8DEE9;
`;

const OuterDiv = styled(Paper)`
  height: 100%;
  width: 100%; 
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
        <br/>
        <p>Kevin Cox</p>
        <p>Software Developer</p>
        <p>Toronto, Ontario</p>
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
              PDF Resume
              <PrintIconStyled />
            </a>
          </p>
        </IconSizes>
      </CenteredText>
    </OuterDiv>
  );
};

export default SideBarComponent;
