import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 30px;

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 40px;
    font-size: 1.4em;
    padding-left: 5px;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-top: 5px;

    &:focus {
      box-shadow: 0 0 10px ${colors.primaryColor};
    }
  }

  label + label {
    margin-top: 20px;
  }

  button {
    margin-top: 30px;
    width: 100%;
  }
`;

export const ProfilePicture = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

export const Titulo = styled.h1`
  text-align: center;
`;

export const EditFoto = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: relative;
  top: 100px;
  right: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${colors.primaryColor};
  border-radius: 50%;
`;
