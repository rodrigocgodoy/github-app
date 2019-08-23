import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import Result from "../Result";
import Error from "../Error";
import Loading from "../Loading";
import { FaSearch } from "react-icons/all";
import {
  Container,
  Logo,
  InputSearch,
  Content,
  Img,
  Input,
  Button
} from "./styles";

class Telasearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      repos: [],
      status: "",
      loading: 0,
      textSearch: this.props.match.params.user
    };
    this.onChangeTextSearch = this.onChangeTextSearch.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    // this.showSpiner = this.showSpiner.bind(this);
    // this.hideSipner = this.hideSipner.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      ...this.state,
      loading: 1
    });

    await this.loadUser();

    await this.setState({
      ...this.state,
      loading: 0
    });
  }

  onChangeTextSearch(event) {
    this.setState({
      ...this.state,
      textSearch: event.target.value
    });
  }

  onClickButton = () => {
    this.loadUser();
  };

  loadUser = async () => {
    // const clientID = 'a2a872a074955ff5991e'
    // const clientSecret = '657c3fc245570766906f1dec2f22f49ef99f897f'
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRECT;

    const user = this.state.textSearch;
    const userData = api.get(`/users/${user}?=${clientID}&=${clientSecret}`);
    const reposData = api.get(
      `/users/${user}/repos?=${clientID}&=${clientSecret}&direction={'watchers':'desc'}`
    );

    await Promise.all([userData, reposData])
      .then(values => {
        this.setState({
          ...this.state,
          user: values[0].data,
          repos: values[1].data,
          status: 202
        });
        console.log(this.state.user, this.state.repos);
      })
      .catch(error => {
        this.setState({
          ...this.state,
          user: [],
          repos: [],
          status: 404
        });
      });
  };

  render() {
    const { user, repos, loading, textSearch } = this.state;

    return (
      <Container>
        <Logo>
          <Link to={"/"}>
            <Img src="/images/logo-gitHub-Search.png" alt="GitHub Search" />
          </Link>
        </Logo>
        <InputSearch>
          <Input
            placeholder="Por favor, digite um username"
            type="text"
            value={textSearch}
            onChange={this.onChangeTextSearch}
          />
          {textSearch === "" ? (
            <Button
              type="button"
              onClick={() => {
                alert("Por favor insira um user para proseguir!");
                return false;
              }}
            >
              <FaSearch />
            </Button>
          ) : (
            <Button type="button" onClick={this.onClickButton}>
              <FaSearch />
            </Button>
          )}
        </InputSearch>
        <Content>
          {/* <h1>{loading}</h1> */}
          {loading === 1 ? <Loading /> : null}
          {!!user && user.login !== undefined ? (
            <Result user={user} repos={repos} />
          ) : (
            <Error />
          )}
        </Content>
      </Container>
    );
  }
}

export default Telasearch;
