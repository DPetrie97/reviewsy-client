import React, { useState } from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText, CardSubtitle, CardHeader, CardImg } from "reactstrap";
import Login from "./Login";
import Register from "./Register";
import '../styles/Auth.css'

const Auth = props => {
    const [ login, setLogin ] = useState(false);
    const [ register, setRegister ] = useState(false);
    const [ modal, setModal ] = useState(false);

    const getLogin = () => {
        return login === true ? (
            <Login updateToken={props.updateToken} setLogin={setLogin} />
        ) : (
            <></>
        );
    };

    const getRegister = () => {
        return register === true ? (
            <Register updateToken={props.updateToken} setRegister={setRegister} />
        ) : (
            <></>
        );
    };

    const toggleModal = () => {
        setModal(true);
    };
    return (
        <div className="mainAuthDiv">
            <Container className="auth-container">
                <Row>
                    <Col md="6"
                    className="register-col"> {getRegister()}
                    <div className="buttons">
                        <Button type="button" onClick={() => setRegister(true)} id="registerButton">Register</Button>
                        
                        {getLogin()}
                        <Button type="button" onClick={() => setLogin(true)} id="loginButton">Login</Button>
                    </div> 
                    </Col>

                    {/* <Col md="6" className="login-col">
                        <Card>
                            <CardBody>
                                <CardTitle>Game Reviews To Last A Lifetime</CardTitle>

                                <br />
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default Auth;