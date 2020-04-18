import React from 'react'
import { Container, Label } from './styles'
import { Row, } from 'react-bootstrap'
import PriceTable from '../../../components/PriceTable'
import { plans } from '../../../plans.json'

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

                <label>Conjunções coordenativas</label><br/> 
                São aquelas que unem dois membros de mesma função de uma oração, duas orações independentes
                 sintaticamente ou, até mesmo, dois períodos. A coordenação estabelece uma união bastante 
                 relevante quanto às questões semânticas dos termos, sem criar dependências sintáticas fortes.
                 São divididas em cinco tipos:   
               </p>
           </Row>
            {
               getConjCoordOne.map((el,i) =>(
                   <Row key={i}>
                        <div id="divider"></div>
                        <div id="cont">
                            <span id="type">{el.type}</span>
                            <span id="text">{el.text}</span>
                        </div>   
                        <div id="divider"></div>
                   </Row>
               ))
            }
            <PriceTable content={getMedicineContent} />
            {
               getConjCoordTwo.map((el,i) =>(
                   <Row key={i}>
                        <div id="divider"></div>
                        <div id="cont">
                            <span id="type">{el.type}</span>
                            <span id="text">{el.text}</span>
                        </div>   
                        <div id="divider"></div>
                   </Row>
               ))
            }
        </Container>
    )
}

const getConjCoordOne = [
    { type: 'Aditivas', text: 'e, nem, mas também'},
    { type: 'Adversativas', text: 'mas, contudo, entretanto, no entanto, porém, todavia'},
    { type: 'Alternativas', text: 'ou, ora…ora…, ou…ou…, quer…quer…, seja…seja… '},
    { type: 'Conclusivas', text: 'logo, pois (depois de verbo), portanto, por isso'},
    { type: 'Explicativas', text: 'que, porque, pois (antes do verbo)'},
]

const getConjCoordTwo = [
    { type: 'Causais', text: 'como, porque, já que, visto que'},
    { type: 'Comprarativas', text: 'mais/menos…que (do que), tal… qual, como'},
    { type: 'Concessivas', text: 'embora, conquanto, ainda que, mesmo que, se bem que'},
    { type: 'Condicionais', text: 'se, caso, desde que, a não ser que'},
    { type: 'Conformativas', text: 'conforme, consoante, segundo, como'},
    { type: 'Consecutivas', text: 'tal/ tanto… que, de maneira que, de modo que'},
    { type: 'Finais', text: 'a fim de que, para que, que'},
    { type: 'Integrantes', text: 'que, se'},
    { type: 'Proporcionais', text: 'à proporção que, à medida que, quanto (mais/menos)'},
    { type: 'Temporais', text: 'quando, enquanto, mal, antes que, assim que, depois que, logo que'}
]

const getMedicineContent = {
    table: {
        first_p: `Quer entrar para a área de medicina? Então esse é o plano para você!`,
        second_p: `Assine agora o plano de Medicina Plus 2020 por ${<Label>12x de R$ 27,90</Label>} e garanta uma plataforma
        com uma preparação completa para você mandar bem nas provas.`,
        third_p: plans.medicina2020plus.description,
    },
    banner: {
       ...plans.medicina2020plus
    },
    title: 'Medicina Enem Plus 2020'
}