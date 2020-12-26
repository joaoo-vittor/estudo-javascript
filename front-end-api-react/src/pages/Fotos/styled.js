import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  justify-content: center;

  label {
    cursor: pointer;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    border: 5px dashed ${colors.primaryColor};
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    width: 140px;
    height: 140px;
  }

  input {
    display: none;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
