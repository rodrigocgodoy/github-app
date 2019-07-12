import React, { Component } from 'react'

import './styles.css'

class Error extends Component {
    render() {
        return (
            <div className='row'>
                <br/><br/><br/>
                <div className='offset-6 col-6'>
                    <h1 className='not-found'>User not found :(</h1>
                </div>
            </div>
        )
    }
}

export default Error