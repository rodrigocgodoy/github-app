import React, { Component } from 'react'
import api from '../../services/api';

import './styles.css'
import Result from '../Result'
import Error from '../Error'

import {Row, Col} from '../layout/Grid'

class Telasearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            repos: [],
            status: '',
            textSearch: this.props.match.params.user,
        }
        this.onChangeTextSearch = this.onChangeTextSearch.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.loadUser = this.loadUser.bind(this);

        console.log("construtor: " + this.state.textSearch)
    }

    componentDidMount() {
        this.loadUser()
    }

    onChangeTextSearch(event){
        this.setState({
            ...this.state,
            textSearch: event.target.value
        })
        console.log("onChange: " + this.state.textSearch)
    }

    onClickButton = () => {
        this.loadUser()
        console.log("onClick: " + this.state.textSearch)
    }

    loadUser = async () => {
        // const clientID = 'a2a872a074955ff5991e'
        // const clientSecret = '657c3fc245570766906f1dec2f22f49ef99f897f'
        const clientID = process.env.REACT_APP_CLIENT_ID
        const clientSecret = process.env.REACT_APP_CLIENT_SECRECT
        console.log(clientID)
        
        const user = this.state.textSearch
        api.get(`/users/${user}?=${clientID}&=${clientSecret}`)
            .then(e => this.setState({
                ...this.state,
                user: e.data,
                status: e.request.status
            }, console.log(e.request.status)))
            .catch( error => this.setState({
                ...this.state,
                user: [],
                status: error.request.status
            }, console.log(error.request.status)))

            //https://developer.github.com/v3/repos/
        api.get(`/users/${user}/repos?=${clientID}&=${clientSecret}&direction={'watchers':'desc'}`)
            .then(e => this.setState({
                ...this.state,
                repos: e.data,
                status: 202
            }, console.log(e.data)))
            .catch( error => this.setState({
                ...this.state,
                user: [],
                status: error.request.status
            }, console.log(error.request.status)))
        console.log("loadUser: " + user)
        
    }

    render() {
        const { user, repos, textSearch } = this.state

        return (
            <div className='container-fluid'>
                <Row>
                    <Col cols='12 12 3 3'>
                        <Row>
                            <Col cols='12 12 12 12' off='0 0 0 0' outherCss='text'>
                                <span className='github'>Github&ensp;</span>
                                <span className='search'>Search</span>
                            </Col>
                        </Row>                                
                    </Col>
                    <Col cols='12 12 8 8'>
                        <Row>
                            <Col cols='12 12 12 12' off='0 0 0 0' outherCss='search'>
                                <input type='text' value={textSearch} className='input-text' onChange={this.onChangeTextSearch} />
                                <button type='button' className='button-search' onClick={this.onClickButton}>
                                    <img src='../../images/search-Icon@3x.png' alt='pesquisar' />
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {
                    user.login !== undefined 
                    ? <Result user={user} repos={repos}/>
                    : <Error /> 
                }
            </div>
        )
    }
}

export default Telasearch