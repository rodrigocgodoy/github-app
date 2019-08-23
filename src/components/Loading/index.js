import React, { Component } from 'react'
import { Container, Content, Img } from './styles';

export default function Loading(props) {
    return(
        <Container>
            <Content>
                <Img src='/images/loading4.gif'/>
            </Content>
        </Container>
    )
}