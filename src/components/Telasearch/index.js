import React, { Component } from 'react'
import api from '../../services/api';

class Telasearch extends Component {
    state = {
        user: []
    }

    componentDidMount() {
        this.loadUser()
    }

    loadUser = async () => {
        const { user } = this.props.match.params

        const response = await api.get(`/users/${user}`)
        this.setState({ user: response.data })
        console.log(response.data)
    }

    render() {
        const { user } = this.state

        return (
            <div>
                {user.name}
                teste 3333
            </div>
        )
    }
}

export default Telasearch