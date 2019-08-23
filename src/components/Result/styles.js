import styled from "styled-components";
// import styled, { css } from "styled-components";

export const ContainerFilho = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100%;
  grid-template-areas:
    "user repos";
    padding-top: 30px;
`;

export const User = styled.div`
    grid-area: user;
    margin-left: 25px;
`
export const Repos = styled.div`
    grid-area: repos;
`

export const Img = styled.img`
    width: 100.2%;
    border: 2px solid #BA73F2;
    margin-left: -5px
`

export const Texto = styled.p`
    font-size: ${props => props.fontSize ? props.fontSize : '15px'};
`

export const HeaderInfo = styled.div`
    border: 2px solid #BA73F2;
    width: 95%;
    height: 20px;
    padding-left: 5px;
    background: #BA73F2;
`

export const InfoUser = styled.div`
    border: 2px solid #BA73F2;
    width: 95%;
    padding-left: 5px;
`

export const InfoRepos = styled.div`
    border: 2px solid #BA73F2;
    width: 95%;
    min-height: 50vh;
    padding: 10px 0 10px 5px;
`

export const HeaderRepo = styled.div`
    width: 99.3%;
    height: 35px;
    background-color: #fff;

    a {
        color: #BA73F2;
        text-decoration: none;
    }

    p {
        // padding: 10px;
    }
`

export const InfoRepo = styled.div`
    min-height: 60px;
    width: 99.3%;
    background-color: #fff;

`