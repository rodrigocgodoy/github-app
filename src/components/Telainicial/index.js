import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

class Telainicial extends Component {
    state = {
        textSearch: '' 
    }

    onChangeTextSearch = (event) => {
        this.setState({
            textSearch: event.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row box-container'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='offset-2 col-8 d-flex justify-content-center'>
                                <span className='github'>Github&ensp;</span>
                                <span className='search'>Search</span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='offset-2 col-8 d-flex justify-content-center'>
                                <input type='text' className='input-text' onChange={this.onChangeTextSearch.bind(this)}/>
                                <Link to={`/search/${this.state.textSearch}`}>
                                    <button type='button' className='button-search'>
                                        <img src='./images/search-Icon@3x.png' alt='pesquisar'/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Telainicial