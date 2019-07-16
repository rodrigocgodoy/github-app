import React, { Component } from 'react'

import './styles.css'

class Result extends Component {
    state = {
        user: this.props.user
    }

    render() {
        
        const { user } = this.state

        return (
            <div className='row'>
                <div className='col-2 user'>
                    {
                        user.avatar_url == null ? '' : (
                            <img src={user.avatar_url} className='avatar' alt="Avatar"/>
                        )
                    }
                    <br/>
                    {
                        user.name == null ? '' : (
                            <span className='name'>{user.name}</span>
                        )
                    }
                    <br/>
                    {
                        user.login == null ? '' : (
                            <span className='login'>{user.login}</span>
                        )
                    }
                    <br/>
                    <div className='divInfo'>
                        {
                            user.bio == null ? '' : (
                                <span className='info'>{user.bio}</span>
                            )
                        }
                        <br/>
                        {
                            user.blog == null ? '' : (
                                <><img src='../../images/followers-icon.png' alt='Followers' className='íconInfo'/><span className='info'>{user.blog}</span></>
                            )
                        }

                    </div>
                </div>
                <div className='col-7'>

                </div>
            </div>
        )
    }
}

export default Result