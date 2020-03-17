import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  background: #fff;
  color: #fff;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.44);

  /* @media (max-width: 480px) {
    height: 30px;
  } */

  img {
    height: 65%;
    cursor: pointer;
  }
`;
