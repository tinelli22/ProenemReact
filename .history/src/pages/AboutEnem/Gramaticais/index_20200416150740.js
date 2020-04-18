import React from 'react'
import { Container } from './styles'
import { Row, } from 'react-bootstrap'

export default function Gramaticais() {
    
    return(
        <Container>
           <Row>
               <h2>Classes gramaticais IX - As conjunções</h2>
           </Row>
           <Row>
               <p>
               É a palavra ou expressão invariável, de valor puramente gramatical, 
               que serve para conectar duas orações ou termos de idêntica função, estabelecendo uma relação de
                coordenação ou subordinação. É importante perceber que a “ordenação” sintática é de fundamental
                 valor para o estudo das conjunções. Quando os termos não dependem uns dos outros, dizemos que 
                 estão em sequência, uma “ordem conjunta”, daí o nome coordenação. Já quando há dependência 
                 (por exemplo, uma oração passa a exercer o papel de objeto direto de outra oração) existe uma 
                 “sub” ordenação, ou seja, uma subordinação.<br/>

                <h4>Conjunções coordenativas</h4><br/> 
                São aquelas que unem dois membros de mesma função de uma oração, duas orações independentes
                 sintaticamente ou, até mesmo, dois períodos. A coordenação estabelece uma união bastante 
                 relevante quanto às questões semânticas dos termos, sem criar dependências sintáticas fortes.
                 São divididas em cinco tipos:   
               </p>
           </Row>
           {
               getConjCoord.map((el,i) =>(
                   <Row key={i}>
                    {
                        i === 2 &&
                        <span>algooo</span>
                    }
                    <div id="divider"></div>
                        <div id="cont">
                            <span>{el.type}</span>
                            <span>{el.text}</span>
                        </div>   
                        <div id="divider"></div>
                   </Row>
               ))
           }
           
        </Container>
    )
}

const getConjCoord = [
    { type: 'Aditivas', text: 'e, nem, mas também'},
    { type: 'Adversativas', text: 'mas, contudo, entretanto, no entanto, porém, todavia'},
    { type: 'Alternativas', text: 'ou, ora…ora…, ou…ou…, quer…quer…, seja…seja… '},
    { type: 'Conclusivas', text: 'logo, pois (depois de verbo), portanto, por isso'},
    { type: 'Explicativas', text: 'que, porque, pois (antes do verbo)'}
]