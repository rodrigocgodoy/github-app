import React, { Component } from 'react'

import './styles.css'

import {Row, Col} from '../layout/Grid'

class Result extends Component {
    state = {
        user: this.props.user
    }

    render() {
        
        const { user } = this.state

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
                                : <span className='info'><i className='far fa-bookmark'></i>&ensp;&ensp;Sem e-mail</span>
                        }
                        <br/>
                        {
                            user.followers !== null 
                                ? <span className='info'><i className='fas fa-user-check'></i>&ensp;{user.followers}</span>
                                : <span className='info'><i className='fas fa-user-check'></i>&ensp;&ensp;Sem e-mail</span>
                        }
                        <br/>
                        {
                            user.following !== null 
                                ? <span className='info'><i className='fas fa-user-plus'></i>&ensp;{user.following}</span>
                                : <span className='info'><i className='fas fa-user-plus'></i>&ensp;&ensp;Sem e-mail</span>
                        }

                    </div>
                </Col>
                <Col cols='12 12 8 8' outherCss='listaRepos'>
                    <div className='col-8 listaRepos'>
                            {this.props.repos.map(e => (
                                <div key={e.id}>
                                    <span className='repo-name' >
                                        {e.name}
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
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Result