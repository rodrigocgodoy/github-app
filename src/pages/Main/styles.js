import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 120px);
  width: 100%;
  font-size: 25px;

  svg {
    flex: 0.5;
    color: #202020;
    cursor: pointer;
    height: 15px;
    margin: 0 5px;
    padding: 0;

    path {
      margin: 0;
      padding: 0;
    }
  }

  .container-search {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 350px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #202020;
    padding: 3px 5px 3px 10px;
    font-size: 30px;
    margin-top: 100px;

    * {
      background: transparent;
      border: none;
    }

    input {
      flex: 3.5;
      padding: 0 0 0 10px;
      border: none;
      border-radius: 5px;
      height: 100%;
      font-size: 15px;
      background: #fff;
    }
  }
`;
