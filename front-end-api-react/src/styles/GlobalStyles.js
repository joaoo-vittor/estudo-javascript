import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: #000;
    overflow-x: hidden;
  }


  button {
    cursor: pointer;
    height: 40px;
    line-height: 20px;
    background-color: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1.2em;
    transition: all 300ms;
  }

  button:hover {
    filter: brightness(75%);
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul, li ol {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background-color: ${colors.errorColor};
  }


`;

export const Container = styled.section`
  max-width: 500px;
  background-color: #fff;
  margin: 40px auto;
  padding: 30px;
  border-radius: 8px;
`;
