import styled from "styled-components";
// import styled, { css } from "styled-components";

const colorRoxo = "#8A2BE2";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 5vh 5vh 90vh;
  grid-template-areas:
    "logo inputSearch inputSearch"
    "content content content";
  padding-top: 35px;
`;

export const Logo = styled.div`
  grid-area: logo;
  justify-self: center;
  margin-left: -100px;
`;

export const InputSearch = styled.div`
  grid-area: inputSearch;
  justify-self: center;
  margin-left: -120px;
  padding-top: 15px;
`;

export const Content = styled.div`
  grid-area: content;
`;

export const Img = styled.img`
  width: 200px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-radius: 3px 0 0 3px;
  border: 2px solid ${colorRoxo};
  color: ${colorRoxo};
  font-weight: bolder;
  font-size: 15px;
  height: 34px;
  min-width: 350px;
  padding-left: 10px;

  &&::placeholder {
    font-size: 15px;
    color: ${colorRoxo};
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
  background-color: ${colorRoxo};
  border-radius: 0 3px 3px 0;
  border: none;
  color: #fff;
  height: 40px;
  width: 65px;
  // mudei o font size de 15 para 14
  font-size: 14px;
  cursor: pointer;

  &&:hover {
    background-color: ${colorRoxo};
    opacity: 0.8;
  }
`;
