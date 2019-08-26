import styled from "styled-components";
import { colorRoxo, device } from "../layout/StylesDevice";

export const ContainerFilho = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100%;
  grid-template-areas: "user repos";
  padding-top: 70px;

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
    grid-template-rows: 50vh 50vh;
    grid-template-areas:
      "user"
      "repos";
    padding-top: 70px;
  }
`;

export const User = styled.div`
  grid-area: user;
  margin-left: 25px;

  @media ${device.mobileS} {
    margin-left: 0;
  }
`;
export const Repos = styled.div`
  grid-area: repos;
`;

export const Img = styled.img`
  width: 100.2%;
  border: 2px solid ${colorRoxo};
  margin-left: -5px;
  border-radius: 100%;

  &&:hover {
    transform: scale(1.1);
    transform: translate(5px, 5px);
    box-shadow: 10px 10px 34px 0px rgba(0, 0, 0, 1);
  }
  @media ${device.mobileS} {
    margin-left: -5px;
    width: 50%;
  }
`;

export const Texto = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : "15px")};
`;

export const HeaderInfo = styled.div`
  border: 2px solid ${colorRoxo};
  width: 95%;
  height: 20px;
  padding-left: 5px;
  background: ${colorRoxo};
  border-radius: 10px 10px 0 0;
`;

export const InfoUser = styled.div`
  background: ${colorRoxo};
  color: #fff;
  border: 2px solid ${colorRoxo};
  width: 95%;
  padding-left: 5px;
`;

export const InfoRepos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 2px solid ${colorRoxo};
  width: 95%;
  min-height: 50vh;
  padding: 10px 0 10px 5px;
`;

export const InfoRepo = styled.div`
  min-height: 35px;
  width: 97%;
  background-color: #fff;
  border-radius: 25px;
  padding: 15px 0 15px 5px;
  margin-bottom: 10px;

  &&:hover {
    background-color: ${colorRoxo};
    color: #fff;
    border: 2px solid ${colorRoxo};
    transform: scale(1.1);
    transform: translate(5px, 5px);
    box-shadow: 10px 10px 34px 0px rgba(0, 0, 0, 0.75);

    a button {
      display: block;
    }

    a {
      color: #fff;
    }
  }

  a {
    color: ${colorRoxo};
    text-decoration: none;
  }
`;

export const ButtonVisit = styled.button`
  background-color: #fff;
  color: ${colorRoxo};
  border: none;
  width: 98.5%;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  ${props => (props.hide === "true" ? "display: none" : "")}

  &&:hover {
    background-color: ${colorRoxo};
    color: #fff;
    /* transform: scale(1.01); */
  }

  span {
    font-size: 25px;

    &&:hover {
    }
  }
`;
