import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 50px;
  background: #fff;
  color: #202020;
  font-size: 15px;
  -webkit-box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.44);
  box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.44);

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    span {
      color: #202020;
    }

    a {
      color: #202020;
    }
  }

  .redes-sociais {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    width: 170px;
    height: 100%;

    a svg {
      cursor: pointer;
      color: #202020;
    }
  }
`;
