import React from 'react'
import { Container, Title, Banner, Button } from './styles'
import { Row, Col } from 'react-bootstrap'

export default function PriceTable({ content }) {
    
    const { table, banner, title } = content;
    console.log(banner)

    return(
        <Container>
            <Row>
                <Col>
                    <Title>{title}</Title>
                    <h5>{table.first_p}</h5>
                    <h5>{table.second_p}</h5>
                    <h5>{table.third_p}</h5>
                </Col>
                <Col>
                    <Banner>
                        <div id="top-back-one"></div>
                        <div id="top-back-two"></div>
                        <h2>{banner.title}</h2>
                        <div id="cont">
                            <div id="subcont">
                                <span id="">{banner.liveClass}</span>
                                <span id="desc">Aulas ao vivo por semana</span>
                            </div>     
                            <div id="line"></div>
                        </div>
                        <div id="cont">
                            <div id="subcont">
                                <span id="">{banner.exam}</span>
                                <span id="desc">Simulados</span>
                            </div>    
                            <div id="line"></div>
                        </div>
                        <div id="cont">
                            <div id="subcont">
                                <span id="">{banner.essay}</span>
                                <span id="desc">Redações corrigidas</span> 
                            </div>
                            <div id="line"></div>
                        </div>
                        <div id="cont">
                            <span>12x de: R$</span>
                            <div id="subcont">
                                <span id="price">{banner.newPrice}</span>
                                <span id="old_price">{banner.oldPrice}</span> 
                            </div>
                        </div>
                        
                            <Button>
                                <label>Eu Quero</label>
                            </Button>
                        
                    </Banner>   
                </Col>
            </Row>
        </Container>
    )
}