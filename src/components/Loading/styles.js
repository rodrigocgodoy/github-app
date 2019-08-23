import styled from "styled-components";
// import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  grid-template-areas:
    "content";
    // padding-top: 15px;
`;

export const Content = styled.div`
    grid-area: content;
    justify-self: center;
    // padding: 15px 0 0 25px;
    align-self: center;
`

export const Img = styled.img`
    width: 150px;
`