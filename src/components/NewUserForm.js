import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewUserForm = ({onSubmit}) => {
    // console.log(props);
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');


    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({
            firstName,
            lastName
        });
        setFirstName('');
        setLastName('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>
                    First Name
                </Label>
                <Input placeholder="First Name" onChange={handleFirstNameChange} value={firstName} required />
            </FormGroup>
            <FormGroup>
                <Label>
                    Last Name
                </Label>
                <Input placeholder="Last Name" onChange={handleLastNameChange} value={lastName} required />
            </FormGroup>
            <FormGroup>
                <Button outline type="submit" color="primary" block>
                    Create
                </Button>
            </FormGroup>
        </Form>
    )
}

export default NewUserForm
