import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FontDiv = styled.div`
  font-family: 'Roboto Mono', monospace;
  p {
    line-height: 1;
  }
  @media only screen and (max-width: 600px) {
    p {
      line-height: 1;
      font-size: 0.8em;
    }
    h3 {
      font-size: 0.8em;
    }
  }
`;

const TextAlignedRight = styled.a`
  float: right;
  margin: 0;
  text-decoration: none;
  color: black;
`;
const AlignLeft = styled.div`
  h3 {
    margin-top: 0;
  }
`;

const Project = ({ project }) => {
  const { projectTitle, projectLink, projectDesc } = project;
  return (
    <FontDiv>
      <TextAlignedRight
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo
      </TextAlignedRight>
      <AlignLeft>
        <h3>{projectTitle}</h3>
        {projectDesc.map((projectDescSingleLine, index) => {
          return <p key={index}>{projectDescSingleLine}</p>;
        })}
      </AlignLeft>
    </FontDiv>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    projectTitle: PropTypes.string,
    projectLink: PropTypes.string,
    projectDesc: PropTypes.arrayOf(PropTypes.string),
  }),
};
Project.defaultProps = {
  project: PropTypes.shape({
    projectTitle: '',
    projectLink: '',
    projectDesc: PropTypes.arrayOf(''),
  }),
};

export default Project;
