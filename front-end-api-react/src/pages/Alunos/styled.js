import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  margin: 5px 0px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  display: flex;
  width: 130px;
  margin: 10px 0px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${colors.primaryColor};
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid ${colors.primaryColor};
  transition: all 400ms;

  &:hover {
    font-weight: 500;
    background-color: #fff;
    border: 1px solid ${colors.primaryColor};
    color: ${colors.primaryColor};
  }
`;
