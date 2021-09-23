import React, { useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { Input } from '../../components/UI/Input';
import { Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';

/**
* @author
* @function Signup
**/

const Signup = (props) => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const dispatch = useDispatch();
   


    const auth = useSelector(state =>state.auth)
    const user = useSelector(state=>state.user)
 
    const userSignup =(e)=>{
        e.preventDefault();
        const user ={
            firstName,lastName,email,password
        }
        dispatch(signup(user));

    }
    if(auth.authenticate){
        return <Redirect to = {"/"}/>
    }
    if(user.load == true){
        return<p>Loading...!</p>
    }
    
    
    return (
        <>
            <Layout></Layout>
            <Container>
            {user.message}
           
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>
                            <Row>
                                <Col md={{ span: 6 }}>
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => { setFirstName(e.target.value)}} />
                                </Col>
                                <Col md={{ span: 6 }}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => {setLastName(e.target.value) }}
                                    />
                                </Col>
                            </Row>
                            <Input
                                label="Email address"
                                type="email"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value) }}
                                placeholder="Enter email"
                                errorMessage="We'll never share your email with anyone else." />
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value) }}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
              
            </Container>
        </>
    )
}


export default Signup;