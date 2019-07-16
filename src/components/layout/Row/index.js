import React, { Component } from 'react'

class Col extends Component {
    render() {
        return (
            <div className='row'>
                {this.props.children}
            </div>
        )
    }
}