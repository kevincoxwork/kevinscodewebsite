import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FontDiv = styled.div`
  font-family: 'Roboto Mono', monospace;
  text-align: left;
  p {
    line-height: 1;
    font-size: 1.2em;
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

const Education = ({ education }) => {
  const { name, date, cred, desc } = education;

  return (
    <FontDiv>
      <TextAlignedRight>{date}</TextAlignedRight>
      <AlignLeft>
        <h3>{name}</h3>
        <p>{cred}</p>
        <p>{desc}</p>
      </AlignLeft>
    </FontDiv>
  );
};

Education.propTypes = {
  education: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    cred: PropTypes.string,
    desc: PropTypes.string,
  }),
};
Education.defaultProps = {
  education: PropTypes.shape({
    name: '',
    date: '',
    cred: '',
    desc: '',
  }),
};

export default Education;
