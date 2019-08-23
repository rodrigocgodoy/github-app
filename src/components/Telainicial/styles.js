import styled from "styled-components";
// import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50vh 50vh;
  grid-template-areas:
    "logo logo logo"
    "inputSearch inputSearch inputSearch";
`;

export const Logo = styled.div`
  grid-area: logo;
  justify-self: center;
  align-self: center;
`;

export const InputSearch = styled.div`
  grid-area: inputSearch;
  justify-self: center;
  align-self: flex-start;
`;

export const Img = styled.img`
  width: 500px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-radius: 3px 0 0 3px;
  border: 2px solid #ac53f2;
  color: #ac53f2;
  font-weight: bolder;
  font-size: 15px;
  height: 34px;
  min-width: 350px;
  padding-left: 10px;

  &&::placeholder {
    font-size: 15px;
    color: #ac53f2;
  }
  &&:hover {
    outline: none;
  }
  &&:focus {
    outline: none;

    &&::placeholder {
    }
  }
`;

export const Button = styled.button`
  /* padding-top: 500px; */
  background-color: #ac53f2;
  border-radius: 0 3px 3px 0;
  border: none;
  color: #fff;
  height: 40px;
  width: 65px;
  // mudei o font size de 15 para 14
  font-size: 14px;
  cursor: pointer;

  &&:hover {
    background-color: #ac53f2;
    opacity: 0.8;
  }
`;
