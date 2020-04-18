import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import api from '../../services/leadApi';

import { Container, List, LeadCatcher, OtherLinks } from './styles';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [useMessage, setUseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleGoTop() {
    const header = document.querySelector('#header');
    header.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    await api
      .post('', {
        data: {
          email,
          tags: 'home-footer',
        },
      })
      .then(() => {
        setEmail('');
        setUseMessage('inscrição realizada');
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <button type="button" className="goTopButton" onClick={handleGoTop}>
        top
      </button>
      <List>
        <legend>Nossos Planos</legend>
        <li>
          <a href="https://proenem.com.br/planos/pro-vip/contratar">
            ProVip 2020
          </a>
        </li>
        <li>
          <a href="https://proenem.com.br/planos/medicina-2020-plus/contratar">
            Medicina Enem 2020 Plus
          </a>
        </li>
        <li>
          <a href="https://proenem.com.br/planos/enem-2020-plus/contratar">
            Enem 2020 Plus
          </a>
        </li>
      </List>
      <List>
        <legend>Tudo sobre o Enem</legend>
        <li>
          <a href="https://www.proenem.com.br/enem/lingua-portuguesa/">
            Língua Portuguesa
          </a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/literatura">Literatura</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/redacao/">Redação</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/matematica/">Matemática</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/fisica/">Física</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/quimica/">Química</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/biologia/">Biologia</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/historia/">História</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/geografia/">Geografia</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/filosofia/">Filosofia</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/sociologia/">Sociologia</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/interpretacao/">
            Interpretação
          </a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/ingles/">Inglês</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/enem/espanhol/">Espanhol</a>
        </li>
      </List>
      <List>
        <legend>Gabaritos</legend>
        <li>
          <a href="https://gabaritos.proenem.com.br/gabarito/enem/2019">
            Gabarito Enem 2019
          </a>
        </li>
        <li>
          <a href="https://gabaritos.proenem.com.br/gabarito/enem/2018">
            Gabarito Enem 2018
          </a>
        </li>
        <li>
          <a href="https://gabaritos.proenem.com.br/gabarito/enem/2017">
            Gabarito Enem 2017
          </a>
        </li>
        <li>
          <a href="https://gabaritos.proenem.com.br/gabarito/enem/2016">
            Gabarito Enem 2016
          </a>
        </li>
        <li>
          <a href="https://gabaritos.proenem.com.br/gabarito/enem/2015">
            Gabarito Enem 2015
          </a>
        </li>
      </List>
      <List>
        <legend>Simulador SISU 2020</legend>
        <li>
          <a href="https://www.proenem.com.br/sisu/simula-sisu/">
            Simula Sisu Proenem
          </a>
        </li>
      </List>

      <LeadCatcher>
        <p>Assine a Newsletter do Vestibulando</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Insira seu e-mail aqui"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            {isLoading ? 'Carregando...' : 'Enviar'}
          </button>
        </form>
        <small>{useMessage}</small>
      </LeadCatcher>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Nossos Planos
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>
                  <a href="https://proenem.com.br/planos/pro-vip/contratar">
                    ProVip 2020
                  </a>
                </li>
                <li>
                  <a href="https://proenem.com.br/planos/medicina-2020-plus/contratar">
                    Medicina Enem 2020 Plus
                  </a>
                </li>
                <li>
                  <a href="https://proenem.com.br/planos/enem-2020-plus/contratar">
                    Enem 2020 Plus
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Tudo sobre o Enem
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  <a href="https://www.proenem.com.br/enem/lingua-portuguesa/">
                    Língua Portuguesa
                  </a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/literatura">
                    Literatura
                  </a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/redacao/">Redação</a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/matematica/">
                    Matemática
                  </a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/fisica/">Física</a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/quimica/">Química</a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/biologia/">
                    Biologia
                  </a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/historia/">
                    História
                  </a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/geografia/">
                    Geografia
                  </a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/filosofia/">
                    Filosofia
                  </a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/sociologia/">
                    Sociologia
                  </a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/interpretacao/">
                    Interpretação
                  </a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/ingles/">Inglês</a>
                </li>
                <li>
                  <a href="https://www.proenem.com.br/enem/espanhol/">
                    Espanhol
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Gabaritos
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>
                  <a href="https://gabaritos.proenem.com.br/gabarito/enem/2019">
                    Gabarito Enem 2019
                  </a>
                </li>
                <li>
                  <a href="https://gabaritos.proenem.com.br/gabarito/enem/2018">
                    Gabarito Enem 2018
                  </a>
                </li>
                <li>
                  <a href="https://gabaritos.proenem.com.br/gabarito/enem/2017">
                    Gabarito Enem 2017
                  </a>
                </li>
                <li>
                  <a href="https://gabaritos.proenem.com.br/gabarito/enem/2016">
                    Gabarito Enem 2016
                  </a>
                </li>
                <li>
                  <a href="https://gabaritos.proenem.com.br/gabarito/enem/2015">
                    Gabarito Enem 2015
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Simulador SISU 2020
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul>
                <li>
                  <a href="https://www.proenem.com.br/sisu/simula-sisu/">
                    Simula Sisu Proenem
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <OtherLinks>
        <li>
          <a href="https://www.proenem.com.br/quem-somos/">Quem somos</a>
        </li>
        <li>
          <a href="https://atendimento.proenem.com.br/hc/pt-br">
            Central de atendimento
          </a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/termos-de-uso/">Termos de uso</a>
        </li>
        <li>
          <a href="https://www.proenem.com.br/materiais-para-download/">
            Materiais para download
          </a>
        </li>
      </OtherLinks>
    </Container>
  );
}
