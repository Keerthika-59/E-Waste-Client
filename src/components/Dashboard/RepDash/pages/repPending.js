import './repPending.css';
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import APIHelper from "../../../API/apihelper2";
import axios from 'axios';

const Pending = () => {

    const [rep, setRep] = useState({});
  const [id, setId] = useState("");
  const fetchId = async () => {
    try {
      const token = Cookies.get("rep");
      const id = await APIHelper.fetchRepId({
        token: token,
      });
      setId(id);
    } catch (e) {
      console.log(e);
    }
  };

  const url =`http://localhost:5000/representative/pending/${id}`;

  useEffect(() => {
    fetchId();
  }, []);

  useEffect(() => {
    const fetchRepData = async () => {
      try {
        const repData = await axios.get('http://localhost:5000/representative/pending/6059e3f25c01de3758413c45');
        console.log(repData.data);
        setRep(repData.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchRepData();
  }, [id]);


  return (
    <>
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
                    <br/>
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
                            <button type="button" className="btn btn-warning btn-lg ">Mark as Complete</button>
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

//   return(
//     <>
    
//     <div className="cards px-3 py-2 my-4 mx-4 justify-content-center" >
//         <div className="card-header bg-white">
//         <h3 className="pendingHeading">Pending activity</h3>
//             <div className="row justify-content-between">
            
//             <br/>
//                 <div className="col">
//                     <p className="text-muted"> Activity ID <br/><span className="font-weight-bold text-dark">1222528743</span></p>
//                 </div>
//                 <div className="col">
//                 <p className="text-muted"> Placed On <br/><span className="font-weight-bold text-dark">19th March,2021</span> </p>
//                 </div>
//             </div>
//         </div>
//         <br/>
//         <div className="card-header bg-white">
//         <div className="row justify-content-between">
            
//             <br/>
//                 <div className="col">
//                 <form>
//                 <div class="form-row">
//                     <div class="col">
//                     <label for="bio">Bio</label>
//                     <input type="text" class="form-control" />
//                     </div>
//                     <div class="col">
//                     <label for="id">Non-bio</label>
//                     <input type="text" class="form-control"/>
//                     </div>
                                     
//                 </div>
//                 <br/>
//                 <div class="form-row">
//                     <div class="col">
//                     <label for="bio">Donation</label>
//                     <input type="text" class="form-control" />
//                     </div>
//                 </div>
//                 <br/>
//                 <div class="form-row">
//                     <div class="col">
//                     <label for="bio">User Name</label>
//                     <input type="text" class="form-control" />
//                     </div>
//                     <div class="col">
//                     <label for="id">User Number</label>
//                     <input type="text" class="form-control"/>
//                     </div>
//                 </div>
//                 <br/>
//                 <div class="form-row">
//                     <div class="col">
//                     <label for="id">Address</label>
//                     <input type="textarea" class="form-control"/>
//                     </div>
//                 </div>
//                 </form>
//                 </div>
//             </div>
//             <br/>
//         </div>
//         <div className="card-foot bg-white px-sm-3 pt-sm-4 px-0">
//         <div className="row text-center ">
//                 <div className="col my-auto border-line ">
//                     <button type="button" className="btn btn-success btn-lg ">Completed</button>
//                 </div>
//                 {/* <div className="col my-auto border-line ">
//                     <button type="button" className="btn btn-danger btn-sm btn-block">Cancel</button>
//                 </div> */}
                
//             </div>
//         </div>
        
//     </div>
//     </>
//   );
// }

// export default Pending;
