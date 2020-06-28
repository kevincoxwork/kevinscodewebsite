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
