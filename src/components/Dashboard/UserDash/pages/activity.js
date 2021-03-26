import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Form, Button, FormLabel } from "react-bootstrap";
import "./activity.css";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../UserSidebar";
import { BsColumnsGap } from "react-icons/bs";
import apihelper from "../../../API/apihelper";
const notify = () => toast.success("Submitted successfully!");


const API_URL  = 'http://localhost:5000/activity/';

const Activity = (props) => {
  const [bio, setBio] = useState(false);
  const [nonbio, setNonbio] = useState(false);
  const [donation, setDonation] = useState(false);
  const [st, setst] = useState(false);
  const [cl, setcl] = useState(false);
  const [fo, setfo] = useState(false);
  const [el, setel] = useState(false);
  const [to, setto] = useState(false);
  const [id, setId] = useState("");
  const [repId, setRepId] = useState("");
  let history = useHistory();
  const findRep = async () => {
    const {data:reps} = await axios.get("http://localhost:5000/reps/")
    setRepId(reps[0]._id)
  };

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
  useEffect(() => {
    findRep();
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();

    let newData;
    if (donation === false) {
      newData = {
        repId,
        userId:id,
        bio,
        nonbio,
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
      // setDonation(false);
      newData = {
        repId,
        userId:id,
        bio,
        nonbio,
        donation: false,
        st,
        cl,
        fo,
        el,
        to,
      };
      // console.log(donation);
      alert("Choose one category!");
    } else {
      newData = {
        repId,
        userId:id,
        bio,
        nonbio,
        donation,
        st,
        cl,
        fo,
        el,
        to,
      };
    }
    console.log(newData);

    axios.post(`${API_URL}${id}`, newData).then((res) => {
      setRepId("")
      setBio(false);
      setNonbio(false);
      setDonation(false);
      setst(false);
      setcl(false);
      setfo(false);
      setel(false);
      setto(false);
      setTimeout(() => {
        history.push("/");
      }, 2000);

      console.log(res.data);
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
                        value={bio}
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
                        value={nonbio}
                        onChange={(e) => setNonbio(e.target.checked)}
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
