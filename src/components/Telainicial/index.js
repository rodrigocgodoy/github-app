import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FaSearch } from "react-icons/all";

import "./styles.css";

// import { Row, Col } from "../layout/Grid";

class Telainicial extends Component {
  state = {
    textSearch: ""
  };

  onChangeTextSearch = event => {
    this.setState({
      textSearch: event.target.value
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Span name="github">Github&ensp;</Span>
          <Span name="search">Search</Span>
        </Row>
        <Row>
          <Input
            type="text"
            className="input-text"
            onChange={this.onChangeTextSearch.bind(this)}
          />
          <Link to={`/search/${this.state.textSearch}`}>
            <Button>
              <FaSearch />
            </Button>
          </Link>
        </Row>
      </Container>
    );
  }
}

const Container = styled.div`
  /* display: grid; */
  grid: repeat(2, 50%);
  /* grid-template-rows: auto; */
  text-align: center;
  /* align-content: center; */
  /* align-items: center; */
  /* align-self: center; */
`;
const Row = styled.div``;

// const Col = styled.div``;

const Span = styled.span`
  font-size: 40px;
  /* font-stretch: normal;
  line-height: normal;
  letter-spacing: normal; */
  color: #000000;
  ${props =>
    props.name === "github" &&
    css`
      font-family: monaco, Consolas, "Lucida Console", monospace;
      font-weight: 200;
      font-style: normal;
    `}
  ${props =>
    props.name === "search" &&
    css`
      font-family: Raleway;
      font-weight: 200;
      font-style: italic;
    `}
`;

const Input = styled.input`
  background: transparent;
  border-radius: 0 3px 3px 0;
  border: 2px solid palevioletred;
  color: palevioletred;
  /* margin: 0.5em 1em; */
  padding: 0.25em 1em;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 0 3px 3px 0;
  border: 2px solid palevioletred;
  color: palevioletred;
  /* margin: 0.5em 1em; */
  padding: 0.2em 1em;
`;

export default Telainicial;
