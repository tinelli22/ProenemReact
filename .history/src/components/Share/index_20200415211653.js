import React from 'react'
import { Container } from './styles'
import share from '../../resources/icons/share.svg';
import facebook from '../../resources/icons/facebook.svg';
import twitter from '../../resources/icons/twitter.svg'
import linkedin from '../../resources/icons/linkedin.svg'

export default function Share() {
    return(
        <Container>
            <img src={share} alt="Compartilhar"/>
            <img src={facebook} alt="Compartilhar no facebook" />
            <img src={twitter} alt="Compartilhar no twitter" />
            <img src={linkedin} alt="Compartilhar no linkedin" />
        </Container>
    )
}