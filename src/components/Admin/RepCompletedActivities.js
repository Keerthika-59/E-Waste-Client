import React, { useEffect, useState, useMemo } from "react";
import Cookies from "js-cookie";
import APIHelper from "../API/apihelper2";
import { Table } from "react-bootstrap";
import axios from "axios";


const RepCompletedActivities = () => {
  const [compActivity, setCompActivity] = useState([]);
  const [id, setId] = useState("");

  const fetchId = async () => {
    try {
      const token = Cookies.get("repr");
      const response = await APIHelper.fetchRepId(token)
      const ID = response.data;

      return ID;

    } catch (e) {
      console.log(e);
    }
  };
    
  useEffect(() => {

    const fetchReprData = async () => {
      try {

        const id = await fetchId();

        const repData = await axios.get(`https://ewaste-dec20-dev-api.azurewebsites.net/representative/completed/${id}`);
        console.log(repData.data.user_activities);
        
        setCompActivity(repData.data.user_activities);
      } catch (err) {
        console.log(err.response || err);
      }
    };
    fetchReprData();
  }, []);

  return (
    <>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Activity Id</th>
            <th>Bio Waste</th>
            <th>Non Bio Waste</th>
            <th>Donation</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>
            {/* {
                JSON.stringify(compActivity)
            } */}
          {compActivity.map((act) => (
              <tr>
                <td>{act._id}</td>
                <td>{act.bioWaste ? "Yes" : "No"}</td>
                <td>{act.nonBioWaste ? "Yes" : "No"}</td>
                <td>{act.donation ? "Yes" : "No"}</td>
                <td>{act.userDetails.userId}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default RepCompletedActivities;