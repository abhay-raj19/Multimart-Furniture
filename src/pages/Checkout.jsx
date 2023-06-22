import React from 'react'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'


const Checkout = () => {
  return (
    <Helmet title='Checkout'>
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Enter Your Name' />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder='Enter Your E-mail' />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder='Phone Number' />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder='Street Address' />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder='City' />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder='Postal Code' />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder='Country' />
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}


export default Checkout




