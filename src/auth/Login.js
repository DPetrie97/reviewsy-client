import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Button, Input } from "reactstrap";
import APIURL from "../helpers/enviroment";

const Login = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);

    const toggle = () => setModal(!modal);
    const changeUnMountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(JSON.parse(value));
    }

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     fetch(`${APIURL}user/login`, {
    //         method: "POST",
    //         body: JSON.stringify({
    //             user: {
    //             username: username,
    //             password: password
    //         }}),
    //         headers: new Headers({
    //             "Content-Type": "application/json"
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(json => props.updateToken(json.sessionToken))
    //     .catch(err => console.log(err));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                username: username, 
                password: password
            }}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (res) => res.json()
        ).then((data) => {
            console.log(data)
            if(data.error){ console.log(data.error); }
            else{
                props.updateToken(data.sessionToken);
            }
        })
     }

     return(
         <div>
            <Modal isOpen={true} toggle={toggle} unmountOnClose={unmountOnClose} className={className}>
                <ModalHeader toggle={toggle}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username: </Label>
                    <Input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password: </Label>
                    <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" placeholder="Must use 5 characters or more, at least 1 special character." />
                </FormGroup>
                {' '}
                </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle, handleSubmit} type="submit">Login</Button>
                    {' '}
                    <Button color="secondary" onClick={() => props.setLogin(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    
    )
};

export default Login;