import React, { Component } from 'react'

class Result extends Component {
    state = {
        user: this.props.user
    }

    render() {
        
        const { user } = this.state

        return (
            <div className='row'>
                <div className='col-5'>
                    {!user.name === '' ? (
                        <h1>{user.name}</h1>
                    ) : ''}
                    {!user.login === '' ? (
                        <h1>{user.login}</h1>
                    ) : ''}
                </div>
                <div className='col-7'>

                </div>
            </div>
        )
    }
}

export default Result