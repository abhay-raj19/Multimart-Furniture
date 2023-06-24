import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Form, FormGroup, Row, Toast } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css'
import '../styles/login.css'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase.config.js';
import { auth } from '../firebase.config.js'
import { setDoc, doc } from 'firebase/firestore';
import { db } from "../firebase.config.js";

import { toast } from 'react-toastify';






const Signup = () => {
  const currentDate = new Date();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${currentDate.toDateString()+ " " + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //Update user profile 
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            //store user data in firebase database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      console.log(user);
      setLoading(false);
      toast.success("Account Created Sucessfully");
      navigate('/login')

    } catch (error) {
      setLoading(false)
      toast.error("Something went wrong");
    }
  }

  return <Helmet title='Signup'>
    <section>
      <Container>
        <Row>
         {
          loading ? ( <Col  lg='12' className='text-center'><h5 className='fw-bold'>Loading.....</h5></Col> 
          ) : (
             <Col lg='6' className='m-auto text-center'>
            <h3 className="fw-bold mb-4">Signup</h3>
            <Form className='auth__form' onSubmit={signup}>

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
                <input type="file" onChange={e => setFile(e.target.files[0])} />
              </FormGroup>

              <button type='submit' className="buy__btn auth__btn"> Create an account </button>
              <p>Already have an account?<Link to='/login'>Login</Link></p>

            </Form>
          </Col>
         )}
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Signup