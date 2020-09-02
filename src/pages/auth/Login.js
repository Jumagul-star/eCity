import React, { useState, useEffect } from 'react'
import { Container, Input, Button, ButtonGroup, Label, Row, Col, Card, CardBody } from 'reactstrap'
import { useHistory, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSumbit = (e) => {
        e.preventDefault();
        // if(email === 'demo@demo.com' && password === 'demo') {
        //     localStorage.setItem('token', `${email}.${password}`)
        //     history.replace('/')
        // }
        props.loginUser({ email, password }, history);
    }

    // const handleRegister = () => {
    //     history.replace('/auth/register')
    // }
    const {clearError} = props;
    useEffect(()=>{
        clearError()
    }, [clearError])

    if(localStorage.getItem('token'))  {
        return <Redirect to='/' />
    }

    return (
        <div style={{backgroundColor: '#e5e5e5'}}>
            <Container>
                <Row
                    style={{height:'100vh'}}
                    className='justify-content-center align-items-center'>
                    <Col md={6}>
                        <Card className="shadow">
                            <CardBody>
                                <form onSubmit={handleSumbit}>
                                    <h2>Login</h2>
                                    {props?.err && props?.err?.response?.data?.message && (
                                        <h4 className='text-danger'>
                                            Error: {props.err.response.data.message}
                                        </h4>
                                    )}
                                    <Label htmlFor='email' className="mt-3">
                                        Enter your Email:
                                    </Label>
                                    <Input
                                        id='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Label htmlFor='password' className="mt-3">
                                        Enter your password:
                                    </Label>
                                    <Input
                                        id='password'
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <ButtonGroup className=' w-100 mt-3'>
                                        <Button style={{
                                            'backgroundColor': '#6CB3F5',
                                            'color': 'black'
                                        }}
                                            type='submit'
                                        >Submit
                                    </Button>
                                        <Button type='reset'>Cancel</Button>
                                    </ButtonGroup>
                                </form>
                                {/* <form className='col-md-6' style={{ 'backgroundColor': '#6CB3F5' }}>
                                    <h2>Sign Up</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat.</p>
                                    <Link>
                                        <Button
                                            onClick={handleRegister}
                                            className='mb-3 bg-light text-dark'>
                                            Register Now
                                    </Button>
                                    </Link>
                                </form> */}
                                <p className="text-center mt-3">Don't have an account? {" "}
                                    <Link to="/auth/register">Sign Up</Link>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    const { isAuth, loading, err } = state.AuthReducer;
    return { isAuth, loading, err }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: ({ email, password }, history) => {
            dispatch(loginUser(
                { email, password },
                history
            )
            )
        },
        clearError: ()=>dispatch({
            type: 'CLEAR_ERROR'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
