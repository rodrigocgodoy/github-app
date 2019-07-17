import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import {Row, Col} from '../layout/Grid'

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
                <Row outherCss='box-container'>
                    <Col cols='12 12 12 12'>
                        <Row>
                            <Col cols='4 4 4 4' off='4 4 4 4'>
                                <span className='github'>Github&ensp;</span>
                                <span className='search'>Search</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col cols='5 5 5 5' off='3 3 3 3' outherCss='d-flex justify-content-center'>
                                <input type='text' className='input-text' onChange={this.onChangeTextSearch.bind(this)}/>
                                <Link to={`/search/${this.state.textSearch}`}>
                                    <button type='button' className='button-searchInicial'>
                                        <img src='./images/search-Icon@3x.png' alt='pesquisar'/>
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Telainicial