import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./activity.css";
import apihelper from "../../../API/apihelper";
import Swal from "sweetalert2";

const API_URL = "https://ewaste-dec20-dev-api.azurewebsites.net/activity/";

const Activity = () => {
  const [bioWaste, setBio] = useState(false);
  const [nonBioWaste, setnonBioWaste] = useState(false);
  const [donation, setDonation] = useState(false);
  const [st, setst] = useState(false);
  const [cl, setcl] = useState(false);
  const [fo, setfo] = useState(false);
  const [el, setel] = useState(false);
  const [to, setto] = useState(false);
  const [id, setId] = useState("");
  let history = useHistory();


  const fetchId = async () => {
    try {
      const token = Cookies.get("user");
      const i = await apihelper.fetchUserId({
        token: token,
      });
      setId(i);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchId();
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();

    let newData;
    if (donation === false) {
      newData = {
        bioWaste,
        nonBioWaste,
        donation,
        st: false,
        cl: false,
        fo: false,
        el: false,
        to: false,
      };
    } else if (
      donation === true &&
      st === false &&
      cl === false &&
      fo === false &&
      el === false &&
      to === false
    ) {
      Swal.fire("Choose a category!", "", "warning");
      return;
    } else {
      newData = {
        bioWaste,
        nonBioWaste,
        donation,
        st,
        cl,
        fo,
        el,
        to,
      };
    }
    console.log(newData);

    axios
      .post(`${API_URL}${id}`, newData)
      .then(() => {
        setBio(false);
        setnonBioWaste(false);
        setDonation(false);
        setst(false);
        setcl(false);
        setfo(false);
        setel(false);
        setto(false);
        setTimeout(() => {
          history.push("/UserDash");
        }, 2000);

        // console.log(res.data);

        Swal.fire("A new Activity has been created!", "", "");
      })
      .catch((err) => {
        console.log(err.message);

        Swal.fire(
          "Representative not Available!",
          "No representative is free at the moment, Please try again after some time",
          "warning"
        );
      });
  };

  return (
    <div class="container">
      <div class="row">
        <div class="holder">
          <form onSubmit={handleContactSubmit} className="form-content">
            <table width="100%">
              <thead>
                <th class="actHeading">User activity</th>
              </thead>
              <tr>
                <td>Biodegradable</td>
                <td>
                  <div class="outerDivFull">
                    <div class="switchToggle">
                      <input
                        type="checkbox"
                        id="switch"
                        value={bioWaste}
                        onChange={(e) => setBio(e.target.checked)}
                      />
                      <label for="switch"></label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Non-Biodegradable</td>
                <td>
                  <div class="outerDivFull">
                    <div class="switchToggle">
                      <input
                        type="checkbox"
                        id="switch1"
                        value={nonBioWaste}
                        onChange={(e) => setnonBioWaste(e.target.checked)}
                      />
                      <label for="switch1"></label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="donation">Donation</td>
                <td>
                  <div class="outerDivFull">
                    <div class="switchToggle">
                      <input
                        type="checkbox"
                        id="switch2"
                        value={donation}
                        onChange={(e) => setDonation(!donation)}
                      />
                      <label for="switch2"></label>
                    </div>
                  </div>
                </td>
              </tr>
              <br />
              {donation === true ? (
                <tr>
                  <td colspan="2" class="last">
                    <ul class="list-group">
                      <li class="list-group-item rounded-0">
                        <div class="custom-control custom-checkbox">
                          <input
                            class="custom-control-input"
                            id="customCheck1"
                            type="checkbox"
                            value={st}
                            onChange={(e) => setst(e.target.checked)}
                          />
                          <label
                            class="cursor-pointer font-italic d-block custom-control-label"
                            for="customCheck1"
                          >
                            Stationery
                          </label>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="custom-control custom-checkbox">
                          <input
                            class="custom-control-input"
                            id="customCheck2"
                            type="checkbox"
                            value={cl}
                            onChange={(e) => setcl(e.target.checked)}
                          />
                          <label
                            class="cursor-pointer font-italic d-block custom-control-label"
                            for="customCheck2"
                          >
                            Clothes
                          </label>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="custom-control custom-checkbox">
                          <input
                            class="custom-control-input"
                            id="customCheck3"
                            type="checkbox"
                            value={fo}
                            onChange={(e) => setfo(e.target.checked)}
                          />
                          <label
                            class="cursor-pointer font-italic d-block custom-control-label"
                            for="customCheck3"
                          >
                            Food
                          </label>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="custom-control custom-checkbox">
                          <input
                            class="custom-control-input"
                            id="customCheck4"
                            type="checkbox"
                            value={el}
                            onChange={(e) => setel(e.target.checked)}
                          />
                          <label
                            class="cursor-pointer font-italic d-block custom-control-label"
                            for="customCheck4"
                          >
                            Electronic items
                          </label>
                        </div>
                      </li>
                      <li class="list-group-item rounded-0">
                        <div class="custom-control custom-checkbox">
                          <input
                            class="custom-control-input"
                            id="customCheck5"
                            type="checkbox"
                            value={to}
                            onChange={(e) => setto(e.target.checked)}
                          />
                          <label
                            class="cursor-pointer font-italic d-block custom-control-label"
                            for="customCheck5"
                          >
                            Toys
                          </label>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
              ) : (
                ""
              )}
              <tr>
                <td colspan="2">
                  <input
                    type="submit"
                    value="Submit"
                    disabled={!bioWaste && !nonBioWaste && !donation}
                    onSubmit={handleContactSubmit}
                  />
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Activity;
