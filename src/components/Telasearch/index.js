import React, { Component } from 'react'
import api from '../../services/api';
import { Link } from 'react-router-dom'

import './styles.css'
import Result from '../Result'
import Error from '../Error'

class Telasearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            repos: [],
            textSearch: this.props.match.params.user,
        }
        this.onChangeTextSearch = this.onChangeTextSearch.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.loadUser = this.loadUser.bind(this);

        console.log("construtor: " + this.state.textSearch)
    }

    componentDidMount() {
        this.loadUser()
        this.render()
    }

    onChangeTextSearch = (event) => {
        this.setState({
            textSearch: event.target.value
        })
        console.log("onChange: " + this.state.textSearch)
    }

    onClickButton = () => {
        this.loadUser()
        console.log("onClick: " + this.state.textSearch)
    }

    loadUser = async () => {
        const user = this.state.textSearch
        console.log("loadUser: " + user)
        const userData = await api.get(`/users/${user}`)
        const reposData = await api.get(`/users/${user}/repos`)
        this.setState({
            user: userData.data,
            repos: reposData.data
        })
    }

    render() {
        const { user, repos, textSearch } = this.state

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-4 text'>
                                <span className='github'>Github&ensp;</span>
                                <span className='search'>Search</span>
                            </div>
                            <div className='col-7 search'>
                                <input type='text' value={textSearch} className='input-text' onChange={(e) => this.onChangeTextSearch.bind(this)} />
                                <button type='button' className='button-search' onClick={this.onClickButton.bind(this)}>
                                    <img src='../../images/search-Icon@3x.png' alt='pesquisar' />
                                </button>
                            </div>
                        </div>
                        {

                            user.login === undefined ? 
                                <Error /> : 
                                <Result user={user} repos={repos}/>
                        }
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Telasearch