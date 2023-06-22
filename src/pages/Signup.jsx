import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/signup.css'



const Signup = () => {
  const [username , setUsername] = useState('')
  const [email,setEmail]  =  useState('')
  const [password,setPassword] = useState('')
  const [file,setFile] = useState('')

  return <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className="fw-bold mb-4">Signup</h3>
              <Form className='auth__form'>

              <FormGroup className='form__group' >
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='UserName' id="" />
              </FormGroup> 

              <FormGroup className='form__group' >
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Your E-mail' id="" />
              </FormGroup>

              <FormGroup className='form__group' >
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Your Password' id="" />
              </FormGroup>

              <FormGroup className='shift-left' >
                <input type="file"  onChange={e => setFile(e.target.files[0])}/>
              </FormGroup>

                <button type='submit' className="buy__btn auth__btn"> Create an account </button>
                <p>Already have an account?<Link to='/login'>Login</Link></p>

              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
};

export default Signup