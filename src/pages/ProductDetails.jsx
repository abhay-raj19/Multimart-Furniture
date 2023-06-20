import React from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row,Col } from 'reactstrap'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
const ProductDetails = () => {
  return (
    <Helmet>
      <CommonSection/>
      <section>
        <Container>
          <Row>
            <Col lg="6"></Col>
            <Col lg="6"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails