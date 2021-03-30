import './repPending.css';
import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import Cookies from "js-cookie";
import axios from 'axios';
import API from '../../../API/apihelper2';

const Pending = () => {

  const [rep, setRep] = useState({});
  const [userid, setUserid] = useState();

  const fetchId = async () => {

    try {
      const token = Cookies.get("repr");
      // console.log(token);

      const response = await API.fetchRepId(token);

      const ID = response.data;

      return ID;

      // console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {

    const fetchRepData = async () => {
      try {

        const id = await fetchId();
        // console.log(id);

        // console.log('First')
        const repData = await axios.get(`https://ewaste-dec20-dev-api.azurewebsites.net/representative/pending/${id}`);
        // console.log(repData.data);
        // console.log(repData.data);

        setRep(repData.data);

      } catch (err) {
        console.log(err.response);
      }
    };
    fetchRepData();
  }, [rep]);

  const completed = async (id) => {

    try {

      const repData = await axios.put(`https://ewaste-dec20-dev-api.azurewebsites.net/admin/activity/complete/${id}`);

      // console.log('Hasi aa gayi')

      Swal.fire('Completed!',
        'You marked the activity as completed',
        // 'warning'
      )

    } catch (error) {

      console.log('No Activity');
    }
    // console.log(repData);
  }

  return (
    <>

      {userid}
      <h3 className="pendingHeading">Pending activity</h3>
      {rep.user_activities ? (
        rep.user_activities
          //   .filter((activity) => activity.status === false)
          .map((activity, index) => (
            <div
              className="cards px-3 py-2 my-4 mx-4 justify-content-center"

            >
              <div className="card-header bg-white">
                {/* <h3 className="pendingHeading">Pending activity</h3> */}
                <div className="row justify-content-between">
                  <br />
                  <div className="col">
                    <p className="text-muted">
                      {" "}
                      Activity ID{" "}
                      <span className="font-weight-bold text-dark">
                        {activity._id}
                      </span>
                    </p>
                  </div>
                  <div className="col">
                    <p className="text-muted">
                      {" "}
                      Placed On{" "}
                      <span className="font-weight-bold text-dark">
                        {activity.placedOn}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <br />
              {/* <div className="card-header bg-white"> */}
              <div className="row justify-content-between">
                <br />
                <div className="col">
                  <form>
                    <div class="form-row">
                      <div class="col-2">
                        <label for="bio">Bio</label>
                        <div class="form-control">
                          {activity.bioWaste ? "Yes" : "No"}
                        </div>
                      </div>
                      <div class="col-2">
                        <label for="id">Non-bio</label>
                        <div class="form-control">
                          {activity.nonBioWaste ? "Yes" : "No"}
                        </div>
                      </div>
                      <div class="col">
                        <label for="id">Donation</label>
                        <div class="form-control">
                          {activity.donation ? (
                            <>
                              <p>{activity.cl ? "Clothes " : ""}
                                {activity.el ? "Electronics " : ""}
                                {activity.to ? "Toys " : ""}
                                {activity.fo ? "Food " : ""}
                                {activity.st ? "Stationary " : ""}</p>{" "}
                            </>
                          ) : (
                            "No"
                          )}
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="form-row">
                      <div class="col">
                        <label for="bio">User Name</label>

                        <div class="form-control">{
                          activity.userDetails.userName
                        }</div>
                      </div>
                      <div class="col">
                        <label for="id">User Number</label>

                        <div class="form-control"> {
                          activity.userDetails.userPhoneNumber
                        }</div>
                      </div>
                    </div>
                    <br />
                    <div class="form-row">
                      <div class="col">
                        <label for="bio">User Address</label>

                        <div class="form-control">{
                          activity.userDetails.userAddress
                        }</div>
                      </div>
                    </div>

                    <div className="card-foot bg-white px-sm-3 pt-sm-4 px-0">
                      <div className="row text-center ">
                        <div className="col my-auto border-line ">
                          <Button type="button" className="btn btn-warning btn-lg" onClick={() => { completed(activity._id) }} variant={(activity.status === true) ? "success" : "secondary"}>Mark as Complete </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <br />
            </div>
          ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Pending;

