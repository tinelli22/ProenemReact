import React from 'react'
import { Container, Title, Banner, Button } from './styles'
import { Row, Col } from 'react-bootstrap'
import bannerFront from '../../resources/imgs/bannerFront.svg'
import bannerBack from '../../resources/imgs/bannerBack.svg'
import { useHistory } from 'react-router-dom'

export default function PriceTable({ content }) {
    
    const history = useHistory()
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
                <Col onClick={() => history.push(banner.postLink)}>
                    <Banner>
                        <img id="top-back-one" src={bannerFront} alt="" />
                        <img id="top-back-two" src={bannerBack} alt="" />
                        <div id="title">
                            <h2>{banner.title}</h2>

                        </div>
                        <div id="cont_class">
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
                            <div id="cont_price">
                                <span>12x de: R$</span>
                                <div id="subcont">
                                    <span id="price">{banner.newPrice}</span>
                                    <span id="old_price">{banner.oldPrice}</span> 
                                </div>
                            </div>
                        
                                <Button>
                                    <label>Eu Quero</label>
                                </Button>
                        </div>
                    </Banner>   
                </Col>
            </Row>
        </Container>
    )
}