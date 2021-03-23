import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { Button } from "react-bootstrap";
import AuthApi from "../../../../../authAPI";
import { Redirect } from "react-router";
import "./repProfile.css";
import APIHelper from "../../../../API/apihelper2";

const UserProfile = () => {
  const Auth = useContext(AuthApi);
  const [edit, setEdit] = useState(false);
  const [token, setToken] = useState("");
  const [users, setUsers] = useState({});
  const [updated, setUpdated] = useState({});

  const fetchId = async () => {
    try {
      const token = Cookies.get("repr");
      const t = await APIHelper.fetchUserId({
        token: token,
      });
      setToken(t);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchId();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await APIHelper.fetchReprData(token);
        setUsers(userData);
        setUpdated(userData);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchUserData();
  }, [token]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdated({
      ...updated,
      [e.target.name]: value,
    });
  };

  const editClick = () => {
    console.log("clicked");
    setEdit(true);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(updated);
    console.log(users);
    try {
      await APIHelper.updateReprProfile(updated,token)
      setEdit(false);
    } catch (err) {
      console.log(err.response);
    }
  };
  const handleCancel = () => {
    setUpdated(users);
    setEdit(false);
  };

  return Auth.auth ? (
    <div className="container rounded bg-white mt-5">
      <div className="row">
        <div className="col-md-4 border-right bg-c-lite-green">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              src="https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png"
              width="90"
              alt=""
            />
            <span className="text-light font-weight-bolder">{users.name}</span>
            <span className="text-light font-weight-normal">{users.email}</span>
            <span className="text-light font-weight-normal">{users.city}</span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="p-3 py-5">
            <div className="justify-content-between align-items-center mb-3">
              {/* <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                                    <h6>Back to home</h6>
                                </div> */}
              <h4 className="text-center">My Profile</h4>
              {/* <Button className="text-center" variant="info"onClick={editClick}>Edit</Button> */}
              <br />
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={updated.name}
                  onChange={handleChange}
                  disabled={edit ? false : true}
                />
              </div>
              <div className="col-md-6">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={updated.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  disabled={edit ? false : true}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={users.email}
                  disabled={true}
                />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input
                  type="text"
                  className="form-control"
                  value={users.gender}
                  placeholder="Gender"
                  disabled={true}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  name="address"
                  onChange={handleChange}
                  value={updated.address}
                  disabled={edit ? false : true}
                />
              </div>
              <div className="col-md-6">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  value={users.city}
                  disabled={true}
                  placeholder="City"
                />
              </div>
            </div>
            {/* <div className="row mt-3">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" value="Bank of America"/></div>
                                <div className="col-md-6"><input type="text" className="form-control" value="043958409584095" placeholder="Account Number"/></div>
                            </div> */}

            <div className="mt-5 form-row">
              <pre> </pre>
              <Button
                className="text-center"
                variant="warning"
                onClick={editClick}
              >
                Edit
              </Button>
              <pre> </pre>
              <Button
                variant="success"
                disabled={edit ? false : true}
                onClick={handleUpdate}
              >
                Update{" "}
              </Button>
              <pre> </pre>
              <Button
                variant="danger"
                disabled={edit ? false : true}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/UserLogIn" />
  );
};

export default UserProfile;
