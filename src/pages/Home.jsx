

import React from 'react'
import Helmet from '../components/Helmet/Helmet'

import { Container,Row,Col } from 'reactstrap';

const Home = () => {

  const year = new Date().getFullYear();
  return <Helmet title={"Home"}>
    <section className="hero__section">
        <Container>
          <Row>
            <col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde earum, numquam nobis esse dolorum, eaque quo eum perferendis dolore error laudantium ad est iste! Ipsum fugit magnam ipsa itaque?</p>
              </div>
            </col>

          </Row>
        </Container>

    </section>
  </Helmet>;
};

export default Home;