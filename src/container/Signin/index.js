import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { Input } from '../../components/UI/Input';
import { login } from "../../actions"
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

/**
* @author
* @function Signin
**/



const Signin = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch();
  
    const userlogin = (e) => {
        e.preventDefault();
        const user = {
            email, password
        }
        dispatch(login(user))

    }
    if(auth.authenticate){
        return <Redirect to = {"/"}/>
    }
    return (
        <>
            <Layout></Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userlogin}>
                            <Input
                                label="Email address"
                                type="email"
                                placeholder="Enter email"
                                errorMessage="We'll never share your email with anyone else."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
export default Signin;