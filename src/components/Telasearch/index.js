import React, { Component } from 'react'
import api from '../../services/api';
// import { Link } from 'react-router-dom'

import './styles.css'
import Result from '../Result'
import Error from '../Error'

class Telasearch extends Component {
    state = {
        user: [],
        repos: [],
        textSearch: this.props.match.params.user
    }

    onChangeTextSearch = (event) => {
        this.setState({
            textSearch: event.target.value
        })
        this.props.match.params = this.state.textSearch
        console.log(event.target.value)
    }

    onClickButton = () => {
        this.setState({
            textSearch: this.state.textSearch
        })
        this.props.match.params = this.state.textSearch
    }

    componentDidMount() {
        // this.setState({
        //     textSearch: this.props.match.params.user
        // })
        this.loadUser()
    }

    loadUser = async () => {
        const { user } = this.props.match.params
        const userData = await api.get(`/users/${user}`)
        const reposData = await api.get(`/users/${user}/repos`)
        this.setState({
            user: userData.data,
            repos: reposData.data
        })
        console.log(userData.data.login)
        console.log(reposData.data)
    }

    render() {
        const { user } = this.state

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
                                <input type='text' value={this.state.textSearch} className='input-text' onChange={this.onChangeTextSearch.bind(this)} />
                                <button type='button' className='button-search' onClick={this.onClickButton}>
                                    <img src='../../images/search-Icon@3x.png' alt='pesquisar' />
                                </button>
                            </div>
                        </div>
                        {user.login === undefined ? <Error /> : 'teste'}
                        <Result user={user}/>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Telasearch