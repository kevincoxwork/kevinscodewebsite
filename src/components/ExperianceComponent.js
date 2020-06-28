import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
const TextAlignedRight = styled.p`
  float: right;
  margin: 0;
`;
const AlignLeft = styled.div`
  h3 {
    margin-top: 0;
  }
`;

const Experiance = ({ job }) => {
  const { company, location, date, jobTitle, jobDesc } = job;
  return (
    <FontDiv>
      <TextAlignedRight>{date}</TextAlignedRight>

      <AlignLeft>
        <h3>
          {jobTitle} / {company} - {location}
        </h3>
        {jobDesc.map((singleJobLine, index) => {
          return <p key={index}>{singleJobLine}</p>;
        })}
      </AlignLeft>
    </FontDiv>
  );
};
Experiance.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    jobTitle: PropTypes.string,
    jobDesc: PropTypes.arrayOf(PropTypes.string),
  }),
};
Experiance.defaultProps = {
  job: PropTypes.shape({
    company: '',
    location: '',
    date: '',
    jobTitle: '',
    jobDesc: PropTypes.arrayOf(''),
  }),
};

export default Experiance;
