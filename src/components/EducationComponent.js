import React from 'react';
import { TextAlignedRight, AlignLeft, FontDiv } from './CommonComponets';
import PropTypes from 'prop-types';


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
