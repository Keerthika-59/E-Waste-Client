import React, { useEffect, useState, useMemo } from "react";
import Cookies from "js-cookie";
import APIHelper from "../../../API/apihelper";
import { Table } from "react-bootstrap";
import axios from 'axios'
const UserCompletedActivities = () => {
  const [compActivity, setCompActivity] = useState([]);
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
        const userData = await axios.get(`http://localhost:5000/admin/user/completed/${id}`)
        console.log(userData.data);
        setCompActivity(userData.data);
      } catch (err) {
        console.log(err.response || err);
      }
    };
    fetchUserData();
  }, [id]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Activity Id</th>
            <th>Bio Waste</th>
            <th>Non Bio Waste</th>
            <th>Donation</th>
            <th>Representative Id</th>
          </tr>
        </thead>
        <tbody>
          {compActivity.user_activities?(compActivity.user_activities
            // .filter((activity) => activity.status === true)
            .map((act) => (
              <tr>
                <td>{act._id}</td>
                <td>{act.bioWaste ? "Yes" : "No"}</td>
                <td>{act.nonBioWaste ? "Yes" : "No"}</td>
                <td>{act.donation ? "Yes" : "No"}</td>
                <td>{act.repDetails.repId}</td>
              </tr>
            ))):(<div>Loading...</div>)}
        </tbody>
      </Table>
    </>
  );
};

export default UserCompletedActivities;
