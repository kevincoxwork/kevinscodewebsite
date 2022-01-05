import Paper from '@mui/material/Paper';
import styled from 'styled-components';

const FontDiv = styled(Paper)`
  background-color: #4C566A !important;
  font-family: 'Roboto Mono', monospace;
  padding-top: 2%;
  padding: 2%;
  margin: 2%;
  width: 100%;
  p {
    line-height: 1;
    font-size: 1.2em;
    color: rgb(216, 222, 233);
  }
  h3, h4{
    color: rgb(216, 222, 233);
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    p, a {
      line-height: 1;
      font-size: 0.7em;
    }
    h3 {
      font-size: 0.9em;
    }
    h4 {
      font-size: 0.7em;
    }
  }
`;

const TextAlignedRight = styled.p`
  float: right;
  text-align: right;
`;

const LinkAlignedRight = styled.a`
  float: right;
  margin: 0;
  text-decoration: none;
  color: #D8DEE9;
`;

const AlignLeft = styled.div`
  h3 {
    margin-top: 0;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

const LeftTitleText = styled.h3`
  font-size: 1.5em;  
  margin: 0;
  flex-grow: 1;
`
export { FontDiv, TextAlignedRight, AlignLeft, FlexDiv, LeftTitleText, LinkAlignedRight };