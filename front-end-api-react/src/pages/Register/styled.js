import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: 700;
  }

  input {
    height: 40px;
    font-size: 1.4em;
    padding-left: 5px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 5px;

    &:focus {
      box-shadow: 0 0 10px ${colors.primaryColor};
    }
  }
`;
