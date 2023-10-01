import { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const User = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [logInError, setLogInError] = useState("");
    const [logInusername, setLogInUsername] = useState("");
    const [logInpassword, setLogInPassword] = useState("");

    const navigate = useNavigate();
    useEffect(()=>{
        setUsername("");
        setPassword("");
        setLogInPassword("");
        setLogInUsername("");
    },[]);



    const [registerEnabled, setRegisterEnabled] = useState(false);
    const handleLogInUsername = (event) => {
        setLogInUsername(event.target.value);
    }

    const handleLogInPassword = (event) => {
        setLogInPassword(event.target.value);
    }

    const handleUsername = (event) => {
        setUsername(event.target.value);

        if (username.length <= 4) {
            setRegisterEnabled(false);
        } else {
            setRegisterEnabled(true);
        }
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);

        if (password.length < 6) {
            setRegisterEnabled(false);
        } else {
            setRegisterEnabled(true);
        }
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (email !== "" && regex.test(email)) {
            setRegisterEnabled(true);
        } else {
            setRegisterEnabled(false);
        }
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        

        const data = {
            'userName': username,
            'password': password,
            'email': email,
        };

        try {
            const response = await axios.post('http://localhost:9001/open/register', data);
            navigate("/User");
            setError("");
            setUsername("");
            setEmail("");
            setPassword("");
            window.alert("Succesfully Registered. Please Log In")
    
        } catch (error) {
            setError(error.response.data.message);
            window.alert(error.message);
        }


    }
    const handleloginSubmit = async (event) => {
        event.preventDefault();

        const data = {
            "username": logInusername,
            "password": logInpassword
        }

        try {
            const response = await axios.post("http://localhost:9001/open/login", data);
            setLogInError("");
            setError("")
            setLogInUsername("")
            setLogInPassword("")

            sessionStorage.setItem('token',response.data.token);
            sessionStorage.setItem('username', response.data.userName);
            sessionStorage.setItem('user_id',response.data.id);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            window.alert(`Loged In as ${response.data.userName}`)

            navigate("/");


        } catch (error) {
            setLogInError("Username or Password is wrong");
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className='login-box shadow-sm rounded'>
                            <div className='text-center mb-4'>
                                <h1>User Register</h1>
                            </div>

                            <Form onSubmit={handleRegister}>
                                <FloatingLabel controlId='username' label="Select a Username" className='mb-3'>
                                    <Form.Control placeholder='Select a Username' value={username} onChange={handleUsername} />
                                </FloatingLabel>

                                <FloatingLabel controlId="password" label="Select a Password" className='mb-3'>
                                    <Form.Control type="password" placeholder='Enter Password' value={password} onChange={handlePassword} />
                                </FloatingLabel>

                                <FloatingLabel controlId="email" label="Enter your Email Address" className='mb-3'>
                                    <Form.Control type="email" placeholder='Enter your Email Address' value={email} onChange={handleEmail} />
                                </FloatingLabel>

                                {error &&
                                    <div className='text-danger mb-3'>
                                        {error}
                                    </div>
                                }

                                <div className='text-end'>
                                    <Button type="submit" variant="primary" disabled={!registerEnabled}>Register</Button>
                                </div>
                            </Form>


                        </div>

                    </Col>
                    <Col>
                    <div className="login-box shadow-sm rounded">
                    <div className='text-center mb-4'>
                        <h1>User Login</h1>
                    </div>

                    <Form onSubmit={handleloginSubmit}>
                        <FloatingLabel controlId='username' label="Select a Username" className='mb-3'>
                            <Form.Control placeholder='Select a Username' value={logInusername} onChange={handleLogInUsername} />
                        </FloatingLabel>

                        <FloatingLabel controlId="password" label="Select a Password" className='mb-3'>
                            <Form.Control type="password" placeholder='Enter Password' value={logInpassword} onChange={handleLogInPassword} />
                        </FloatingLabel>

                        {error &&
                            <div className="text-danger mb-3">
                                {logInError}
                            </div>
                        }

                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                </div>
                    
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default User;