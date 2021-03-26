import React, { useEffect, useState, useMemo } from "react";
import Cookies from "js-cookie";
import APIHelper from "../API/apihelper";
import { Table } from "react-bootstrap";
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
        const userData = await APIHelper.fetchUserData(id);
        console.log(userData.activity);
        setCompActivity(userData.activity);
      } catch (err) {
        console.log(err.response || err);
      }
    };
    fetchUserData();
  }, [id]);

  return (
    <>
      <Table responsive striped bordered hover>
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
          {compActivity
            .filter((activity) => activity.status === true)
            .map((act) => (
              <tr>
                <td>{act._id}</td>
                <td>{act.bioWaste ? "Yes" : "No"}</td>
                <td>{act.nonBioWaste ? "Yes" : "No"}</td>
                <td>{act.donation ? "Yes" : "No"}</td>
                <td>{act.repId}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserCompletedActivities;