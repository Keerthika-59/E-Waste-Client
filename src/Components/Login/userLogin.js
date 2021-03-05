import React, { useState } from 'react'

import { Form, Button, FormLabel } from 'react-bootstrap';

export const UserForm = () => {
    const setPassword = useState('')
    return (
        <Form className="w-50 mx-auto">
            <h3 className="text-center">User login</h3>

            <div className="form-group">
                <FormLabel>Email <em style={{ color: 'red' }}> * </em>  </FormLabel>

                <input type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required={true}
                />

            </div>

            <div className="form-group">
                <FormLabel>Password <em style={{ color: 'red' }}> * </em> </FormLabel>
                <input
                    type="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="form-control"
                    placeholder="Enter password"
                    required={true}
                />
            </div>

            <Button disabled={false} type="submit"
                className=" my-4 btn-primary btn-lg btn-block"
            > Submit
            </Button>
        </Form>
    )
}
