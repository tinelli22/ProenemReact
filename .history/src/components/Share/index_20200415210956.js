import React from 'react'
import { Container } from './styles'
import share from '../../resources/icons/share.svg';

export default function Share() {
    return(
        <Container>
            <img src={share} alt="Compartilhar"/>
        </Container>
    )
}