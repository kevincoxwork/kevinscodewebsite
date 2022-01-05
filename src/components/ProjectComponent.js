import React from 'react';
import { FontDiv, LinkAlignedRight, AlignLeft, FlexDiv, LeftTitleText } from './CommonComponets';
import PropTypes from 'prop-types';

const Project = ({ project }) => {
  const { projectTitle, projectLink, projectDesc } = project;
  return (
    <FontDiv>
      <AlignLeft>
        <FlexDiv>
          <LeftTitleText>{projectTitle}</LeftTitleText>
          <LinkAlignedRight
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </LinkAlignedRight>
        </FlexDiv>
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
