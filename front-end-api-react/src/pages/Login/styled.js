import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  input {
    font-size: 1.3em;
    margin-bottom: 5px;
    height: 40px;
    border: 1px solid #eee;
    border-radius: 5px;
    padding-left: 5px;

    &:focus {
      box-shadow: 0 0 10px ${colors.primaryColor};
    }
  }

  button {
    margin-top: 10px;
  }
`;
