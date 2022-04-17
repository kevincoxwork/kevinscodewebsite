import React from 'react';
import {FontDiv, TextAlignedRight, AlignLeft, FlexDiv, LeftTitleText} from './CommonComponets';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CompanyText = styled.h4`
font-size: 1.3em;  
margin: 0;
`

const Experience = ({ job }) => {
  const { company, location, date, jobTitle, jobDesc } = job;
  return (
    <FontDiv>
      <AlignLeft>
        <FlexDiv>
          <LeftTitleText>
            {jobTitle}
          </LeftTitleText>
          <TextAlignedRight>{date}</TextAlignedRight>
          </FlexDiv>

        <CompanyText> {company} - {location}</CompanyText>
        {jobDesc.map((singleJobLine, index) => {
          return <p key={index}>{singleJobLine}</p>;
        })}
      </AlignLeft>
    </FontDiv>
  );
};
Experience.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    jobTitle: PropTypes.string,
    jobDesc: PropTypes.arrayOf(PropTypes.string),
  }),
};
Experience.defaultProps = {
  job: PropTypes.shape({
    company: '',
    location: '',
    date: '',
    jobTitle: '',
    jobDesc: PropTypes.arrayOf(''),
  }),
};

export default Experience;
