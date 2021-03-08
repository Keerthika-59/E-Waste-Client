import React, { useState } from 'react'

import { Form, Button, FormLabel } from 'react-bootstrap';

export const InputForm = () => {

  const initialInputState = { name: "", email: "", message: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);

  const handleInputChange = e => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  const handleFinalSubmit = e => {
    e.preventDefault();
    console.log(eachEntry);

  };
  return (
    <Form className="w-75 mx-auto">
      <h3 className="text-center">Contact us</h3>


      <div className="form-group">
        <FormLabel>Name <em style={{ color: 'red' }}> * </em>  </FormLabel>
        <input name="name"
          type="text"
          className="form-control"
          placeholder="Enter Name"
          required={true}
          onChange={handleInputChange}
        />
      </div>




      <div className="form-group">
        <FormLabel>Email <em style={{ color: 'red' }}> * </em>  </FormLabel>

        <input name="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
          required={true}
          onChange={handleInputChange}

        />

      </div>

      <div className="form-group">
        <FormLabel>Message <em style={{ color: 'red' }}> * </em>  </FormLabel>

        <textarea name="message"
          type="text"
          className="form-control"
          placeholder="Enter message"
          rows="5"
          required={true}
          onChange={handleInputChange}
        />

      </div>

      <Button disabled={false} type="submit" onClick={handleFinalSubmit}
        className=" my-4 btn-primary btn-lg btn-block"
      > Submit
            </Button>
    </Form>
  )
}




