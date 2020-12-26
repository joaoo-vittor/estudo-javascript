import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2em;

  div {
    position: absolute;
    width: 100%;
    height: 130%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }

  span {
    z-index: 2;
  }
`;