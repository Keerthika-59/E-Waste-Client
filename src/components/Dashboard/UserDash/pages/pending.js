import React, { useState, useEffect } from "react";
import "./pending.css";
import axios from "axios";
import Cookies from "js-cookie";
import APIHelper from "../../../API/apihelper";
const Pending = () => {
  const [user, setUser] = useState([]);
  const [id, setId] = useState("");
  const fetchId = async () => {
    try {
      const token = Cookies.get("user");
      const id = await APIHelper.fetchUserId({
        token: token,
      });
      setId(id);
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
        // const userData = await APIHelper.fetchUserData(id);
        const userData = await axios.get(
          `https://ewaste-dec20-dev-api.azurewebsites.net/admin/user/pending/${id}`
        );
        // console.log(userData.data);
        setUser(userData.data);
      } catch (err) {
        console.log(err.response || err.message);
      }
    };
    fetchUserData();
  }, [id]);

  return (
    <>
      <h3 className="pendingHeading">Pending activity</h3>
      {user.user_activities ? (
        user.user_activities
          // .filter((activity) => activity.status === false)
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
                      <div class="col">
                        <label for="bio">Biodegradable</label>
                        <div class="form-control">
                          {activity.bioWaste ? "Yes" : "No"}
                        </div>
                      </div>
                      <div class="col">
                        <label for="id">Non-biodegradable</label>
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
                        <label for="bio">Representative Name</label>
                        <div class="form-control">
                          {activity.repDetails.repName}
                        </div>
                      </div>
                      <div class="col">
                        <label for="id">Representative Number</label>
                        <div class="form-control">
                          {activity.repDetails.repPhoneNumber}
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
