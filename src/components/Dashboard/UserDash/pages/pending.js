import React, { useState, useEffect } from "react";
import "./pending.css";
import Cookies from "js-cookie";
import APIHelper from "../../../API/apihelper";
const Pending = () => {
  const [user, setUser] = useState({});
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
        console.log(userData);
        setUser(userData);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchUserData();
  }, [id]);
  
return (user.activity?(user.activity.map((activity, index) => (
        <>
          <div
            className="cards px-3 py-2 my-4 mx-4 justify-content-center"
            style={{ width: "650px" }}
          >
            <div className="card-header bg-white">
              <h3 className="pendingHeading">Pending activities</h3>
              <div className="row justify-content-between">
                <br />
                <div className="col">
                  <p className="text-muted">
                    {" "}
                    Activity ID{" "}
                    <span className="font-weight-bold text-dark">
                      {activity._id}
                    </span>
                  </p>{" "}
                  <br />
                  <p className="text-muted">
                    {" "}
                    Placed On{" "}
                    <span className="font-weight-bold text-dark">
                      {activity.placedOn}
                    </span>{" "}
                  </p>
                </div>
                <div class="flex-col my-auto">
                  <h6 class="ml-auto mr-3">
                    {" "}
                    <a href="#">View Details</a>{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="card-foot bg-white px-sm-3 pt-sm-4 px-0">
              <div className="row text-center ">
                <div className="col my-auto border-line ">
                  <button type="button" className="btn btn-danger btn-sm btn-block">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))):(<div>Loading...</div>))
//   return (user.activity?(user.activity.map((activity, index) => (
//     <>
//       <div
//         className="cards px-3 py-2 my-4 mx-4 justify-content-center"
//         style={{ width: "650px" }}
//       >
//         <div className="card-header bg-white">
//           <h3 className="pendingHeading">Pending activities</h3>
//           <div className="row justify-content-between">
//             <br />
//             <div className="col">
//               <p className="text-muted">
//                 {" "}
//                 Activity ID{" "}
//                 <span className="font-weight-bold text-dark">
//                   {activity._id}
//                 </span>
//               </p>{" "}
//               <br />
//               <p className="text-muted">
//                 {" "}
//                 Placed On{" "}
//                 <span className="font-weight-bold text-dark">
//                   {activity.placedOn}
//                 </span>{" "}
//               </p>
//             </div>
//             <div class="flex-col my-auto">
//               <h6 class="ml-auto mr-3">
//                 {" "}
//                 <a href="#">View Details</a>{" "}
//               </h6>
//             </div>
//           </div>
//         </div>
//         <div className="card-foot bg-white px-sm-3 pt-sm-4 px-0">
//           <div className="row text-center ">
//             <div className="col my-auto border-line ">
//               <button type="button" className="btn btn-danger btn-sm btn-block">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )):(<div>null</div>))

// //     
};

export default Pending;
