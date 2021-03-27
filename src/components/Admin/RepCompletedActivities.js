// import React, { useEffect, useState, useMemo } from "react";
// // import Header from "./Header";
// import { TableHeader, Pagination, Search } from "./DashboardPages/Tablecomponent";
// import useFullPageLoader from "./DashboardPages/useFullPageLoader";
// // import AppConfig from "App.config";
// import Swal from 'sweetalert2'
// import { Button, Table } from 'react-bootstrap'

// const RepCompletedActivities = () => {
//     const [compActivity, setCompActivity] = useState([]);
//     const [loader, showLoader, hideLoader] = useFullPageLoader();
//     const [totalItems, setTotalItems] = useState(0);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [search, setSearch] = useState("");
//     const [sorting, setSorting] = useState({ field: "", order: "" });

//     const ITEMS_PER_PAGE = 5;

//     const headers = [
//         { name: "Activity Id", field: "ActivityId", sortable: false },
//         { name: "Bio", field: "bio", sortable: false },
//         { name: "Non-Bio", field: "nonBio", sortable: false },
//         { name: "Donation", field: "donation", sortable: true },
//         { name: "User Id", field: "userId", sortable: false }

//     ];

//     useEffect(() => {
//         const getData = () => {
//             showLoader();

//             fetch("https://ewaste-dec20-dev-api.azurewebsites.net/reps")
//                 .then(response => response.json())
//                 .then(json => {
//                     hideLoader();
//                     setCompActivity(json);
//                 });
//         };

//         getData();
//     }, [compActivity]);

//     const UserCompActData = useMemo(() => {
//         let compAct = compActivity;

//         if (search) {
//             compAct = compAct.filter(
//                 act =>
//                     act.donation.toLowerCase().includes(search.toLowerCase())
//             );
//         }

//         setTotalItems(compAct.length);

//         //Sorting comments
//         if (sorting.field) {
//             const reversed = sorting.order === "asc" ? 1 : -1;
//             compAct = compAct.sort(
//                 (a, b) =>
//                     reversed * a[sorting.field].localeCompare(b[sorting.field])
//             );
//         }

//         //Current Page slice
//         return compAct.slice(
//             (currentPage - 1) * ITEMS_PER_PAGE,
//             (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
//         );
//     }, [compActivity, currentPage, search, sorting]);

//     return (

//             <>
//             {/* <ExternalInfo page="datatable" /> */}

//             <div className="row w-100">
//                 <div className="col mb-3 col-12 text-center">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <Pagination
//                                 total={totalItems}
//                                 itemsPerPage={ITEMS_PER_PAGE}
//                                 currentPage={currentPage}
//                                 onPageChange={page => setCurrentPage(page)}
//                             />
//                         </div> 

//                         {/* <Search

//                             onSearch={value => {
//                                 setSearch(value);
//                                 setCurrentPage(1);
//                             }}
//                         /> */}
//                     </div>
//                     <Table responsive >
//                         <thead>
//                             <tr>
//                                 <th>Activity Id</th>
//                                 <th>Bio</th>
//                                 <th>Non-bio</th>
//                                 <th>Donation</th>
//                                 <th>UserId</th>
//                             </tr>
//                         </thead>
//                     <tbody>
//                         {UserCompActData.map(act => (
//                             <tr>

//                                 <td>{act._id}</td>
//                                 <td>{act.bioWaste}</td>
//                                 <td>{act.nonBioWaste}</td>
//                                 <td>{act.donation}</td>
//                                 <td>{act.userId}</td>

//                             </tr>
//                         ))}
//                     </tbody>
//                     </Table>
//                 </div>
//                 <div className="col-md-6">
//                     <Pagination
//                         total={totalItems}
//                         itemsPerPage={ITEMS_PER_PAGE}
//                         currentPage={currentPage}
//                         onPageChange={page => setCurrentPage(page)}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default RepCompletedActivities;


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
      setId(response.data);

    } catch (e) {
      console.log(e);
    }
  };
    
//   useEffect(() => {
    
//   }, []);

  useEffect(() => {
    fetchId();
    const fetchReprData = async () => {
      try {

        const repData = await axios.get(`https://ewaste-dec20-dev-api.azurewebsites.net/representative/completed/605e1e67e5318a3b94a75a26`);
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