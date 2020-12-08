import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import APIURL from "../helpers/enviroment";

const Register = props => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');
    const [ admin, setAdmin ] = useState('');

    const triggerUsernameChange = (event) => setUsername(event.target.value);
    const triggerPasswordChange = (event) => setPassword(event.target.value);
    const triggerPasswordConfirmChange = (event) => setPasswordConfirm(event.target.value);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(username && password){
            if(password === passwordConfirm) {
                fetch(`${APIURL}user/register`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ user: {
                        username: username,
                        password: password
                    }})
                })
                .then(response => response.json())
                .then(json => props.updateToken(json.sessionToken))
                .then(() => {
                    console.log("User Registered Successfully!")
                })
                .catch(err => console.log(err));

            } else {
                alert("Passwords MUST match!");
            }
        }
    };
        

    return (
        <Modal isOpen={true}>
            <ModalHeader toggle={toggle}>Register an Account!</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit} id="registerForm">
                    <FormGroup>
                        <Label htmlFor="username" >Username: </Label>
                        <Input onChange={triggerUsernameChange} type="username" id="username" value={username} placeholder="Username Required" name="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password: </Label>
                        <Input type="password" placeholder="Must use 5 characters or more, at least 1 special character." id="registerPassword" value={password} onChange={triggerPasswordChange} name="registerPassword" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="passwordConfirm">Confirm Password: </Label>
                        <Input type="password" placeholder="Must match password" id="passwordConfirm" value={passwordConfirm} onChange={triggerPasswordConfirmChange} name="passwordConfirm" />
                        <br />
                    </FormGroup>
                        <ModalFooter>
                        <Button onClick={toggle} type="submit">Submit</Button>
                        {' '}
                        <Button onClick={() => props.setRegister(false)}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default Register;