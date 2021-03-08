import React, { useState } from 'react'

import { Form, Button, FormLabel } from 'react-bootstrap';

export const UserForm = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        console.log({email : email, password :  password});

    }


    return (

        <Form className="w-50 text-center mx-auto">
            <h3 className="text-center">User login</h3>

            <div className="form-group">
                <FormLabel>Email <em style={{ color: 'red' }}> * </em>  </FormLabel>

                <input type="email"
                    className="form-control"
                    onChange = { (e) => setEmail(e.target.value) }
                    placeholder="Enter email"
                    required={true}
                />

            </div>

            <div className="form-group">
                <FormLabel>Password <em style={{ color: 'red' }}> * </em> </FormLabel>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter password"
                    required={true}
                />
            </div>

             <Button onClick = {e => loginSubmitHandler(e)} type="submit"
                className=" my-4 btn-primary btn-lg btn-block"
            > Submit
            </Button>
        </Form>
    )
}
