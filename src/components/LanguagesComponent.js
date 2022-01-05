import React from 'react';
import PropTypes from 'prop-types';
import {FontDiv} from './CommonComponets';

const Languages = ({ languagesProp }) => {
  const { languagesTitle, languages } = languagesProp;
  return (
    <FontDiv>
      <div>
        <h3>{languagesTitle}</h3>
        <p>{languages}</p>
      </div>
    </FontDiv>
  );
};

Languages.propTypes = {
  languagesProp: PropTypes.shape({
    languagesTitle: PropTypes.string,
    languages: PropTypes.string,
  }),
};
Languages.defaultProps = {
  languagesProp: PropTypes.shape({
    languagesTitle: '',
    languages: '',
  }),
};

export default Languages;
