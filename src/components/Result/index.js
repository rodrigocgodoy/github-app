import React, { Component } from 'react'

import './styles.css'

import {Row, Col} from '../layout/Grid'

class Result extends Component {
    state = {
        user: this.props.user
    }

    render() {
        
        const { user, repos } = this.props

        return (
            <Row>
                <Col cols='12 12 3 3' outherCss='user'>
                    {
                        user.avatar_url !== null ? (
                            <img src={user.avatar_url} className='avatar' alt="Avatar"/>
                        ) : ''
                    }
                    <br/>
                    {
                        user.name !== null ? (
                            <span className='name'>{user.name}</span>
                        ) : ''
                    }
                    <br/>
                    {
                        user.login !== null ? (
                            <span className='login'>{user.login}</span>
                        ) : ''
                    }
                    <br/>
                    <div className='divInfo'>
                        {
                            user.email !== null
                            ? <span className='info'><i className='far fa-envelope'></i>&ensp;{user.email}</span>
                            : <span className='info'><i className='far fa-envelope'></i>&ensp;Sem e-mail</span> 
                        }
                        <br/>
                        {
                            user.bio !== null 
                                ? <span className='info'><i className='far fa-bookmark'></i>&ensp; {user.bio}</span>
                                : <span className='info'><i className='far fa-bookmark'></i>&ensp; Sem biografia</span>
                        }
                        <br/>
                        {
                            user.followers !== null 
                                ? <span className='info'><i className='fas fa-star'></i>&ensp;{user.followers}</span>
                                : <span className='info'><i className='fas fa-star'></i>&ensp;</span>
                        }
                        <br/>
                        {
                            user.following !== null 
                                ? <span className='info'><i className='far fa-star'></i>&ensp;{user.following}</span>
                                : <span className='info'><i className='far fa-star'></i>&ensp;</span>
                        }

                    </div>
                </Col>
                <Col cols='12 12 8 8' outherCss='listaRepos'>
                    {repos.map(e => (
                        <div key={e.id}>
                            <span className='repo-name' >
                                <a href={e.html_url} target='blank'>{e.name}</a>
                            </span>
                            <br/>
                            {
                                e.description !== null
                                    ? <span className='repo-description'> {e.description} </span>
                                    : <span className='repo-description'> Sem descrição </span>
                            }
                            <br/>
                            <span className='repo-star'>
                                <i className='far fa-star'></i>
                                {e.stargazers_count}
                            </span>
                            <br/><br/><br/>
                        </div>
                    ))}
                </Col>
            </Row>
        )
    }
}

export default Result