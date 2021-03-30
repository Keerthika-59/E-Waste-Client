import React, { useState, useEffect } from "react";
import axios from "axios";
import "./contactStyle.css";
import { ToastContainer, toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const API_URL = "https://ewaste-dec20-dev-api.azurewebsites.net/contacts";

export const InputForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  const [message, setMessage] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  let history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setMessage({
      ...message,
      [e.target.name]: value,
    });
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      handleContactSubmit();
    }
  }, [formErrors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(message));
    setIsSubmitting(true);
  };
  const handleContactSubmit = (e) => {
    // e.preventDefault();
    // setFormErrors(validate(updated));
    // setIsSubmitting(true);

    const newContact = {
      name: message.name,
      email: message.email,
      message: message.msg,
    };
    axios.post(API_URL, newContact).then(() => {
      setMessage("");

      setTimeout(() => {
        history.push("/");
      }, 3000);

      // <Redirect to= "/ContactUs"/>

      Swal.fire("Submitted sucessfully!");
    });
  };
  const validate = (values) => {
    let errors = {};
    const regexName = /^[a-zA-Z ]*$/;
    // const regexPhone = /^[0-9]{10}$/g;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      errors.name = "Cannot be blank";
    } else if (!regexName.test(values.name)) {
      errors.name = "Invalid Name format";
    }
    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.msg) {
      errors.msg = "Cannot be blank";
    }
    return errors;
  };

  return (
    <>
      <div
        className="contact2"
        style={{
          backgroundImage: `url("https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg")`,
        }}
      >
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div className="card card-shadow border-0 mb-4">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-4">
                      <h4 className="title">Contact Us</h4>

                      <form onSubmit={handleSubmit} noValidate>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                name="name"
                                value={message.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your Name"
                              />
                               {formErrors.name && (
                    <span className="error">{formErrors.name}</span>
                  )}
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                name="email"
                                value={message.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="Enter your Email"
                              />
                               {formErrors.email && (
                    <span className="error">{formErrors.email}</span>
                  )}
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                name="msg"
                                value={message.msg}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your Message"
                              />
                               {formErrors.msg && (
                    <span className="error">{formErrors.msg}</span>
                  )}
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
                            >
                              <span>
                                {" "}
                                SUBMIT NOW <i className="ti-arrow-right"></i>
                              </span>
                            </button>
                            <ToastContainer limit={1} />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 bg-image"
                    style={{
                      backgroundImage: `url("https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg")`,
                    }}
                  >
                    <div className="detail-box p-4">
                      <h5 className="text-white font-weight-light mb-3">
                        ADDRESS
                      </h5>
                      <p className="text-white op-7">
                        Mindtree
                        <br />
                        Bhubaneshwar{" "}
                      </p>
                      <h5 className="text-white font-weight-light mb-3 mt-4">
                        CALL US
                      </h5>
                      <p className="text-white op-7">
                        9876543209
                        <br /> 9253623732
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
