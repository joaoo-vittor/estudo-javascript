import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 20px 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #fff;
    margin: 0px 10px;
    font-weight: bold;
  }

  a:hover {
    color: #fff8;
  }
`;
