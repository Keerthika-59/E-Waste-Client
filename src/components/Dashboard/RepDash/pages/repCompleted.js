import React from 'react';
import './repComplete.css';
import { useState } from "react";

const Completed = () => {
  const [completed, setCompleted] = useState([]);

    return(
     <>
       <div class="container">
        <div class="row">
            <div class="col-md-10">
                <div class="card  px-3 py-4 my-4 mx-5 justify-content-center">
                    <div class="card-body1">
                        <h6 class="card-title">Timeline</h6>
                        <div id="content">
                            <ul class="timeline">
                                <li class="event" data-date="22/03/2021">
                                    <h3>Activity ID</h3>
                                    <p>Representative name</p>
                                </li>
                                <li class="event" data-date="2:30 - 4:00pm">
                                    <h3>Activity ID</h3>
                                    <p>Representative name</p>
                                </li>
                                <li class="event" data-date="5:00 - 8:00pm">
                                    <h3>Activity ID</h3>
                                    <p>Representative name</p>
                                </li>
                                <li class="event" data-date="8:30 - 9:30pm">
                                    <h3>Activity ID</h3>
                                    <p>Representative name</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       

    </>   
    );
    }

export default Completed;




// import React, { useEffect, useState, useMemo } from "react";
// // import Header from "./Header";
// import APIHelper from '../../../API/apihelper';
// import { TableHeader, Pagination, Search } from "../../../Admin/DashboardPages/Tablecomponent";
// import useFullPageLoader from "../../../Admin/DashboardPages/useFullPageLoader";
// // import AppConfig from "App.config";
// import Swal from 'sweetalert2'
// import {Button} from 'react-bootstrap'

// const Completed = () => {
//     const [completed, setCompleted] = useState([]);
//     const [loader, showLoader, hideLoader] = useFullPageLoader();
//     const [totalItems, setTotalItems] = useState(0);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [search, setSearch] = useState("");
//     const [sorting, setSorting] = useState({ field: "", order: "" });

//     const ITEMS_PER_PAGE = 9;

//     const headers = [
//         { name: "No#", field: "id", sortable: false },
//         { name: "Name", field: "name", sortable: true },
//         { name: "Email", field: "email", sortable: true },
//         { name: "Phone Number", field: "body", sortable: false },
//         { name: "City", field: "city", sortable: true },
//         { name: "Address", field: "address", sortable: true },
//         { name: "Action", field: "body", sortable: false }
//     ];

//     useEffect(() => {
//         const getData = () => {
//             showLoader();

//             fetch(`${APIHelper.API_URL}`)
//                 .then(response => response.json())
//                 .then(json => {
//                     hideLoader();
//                     setCompleted(json);
//                 });
//         };

//         getData();
//     }, []);

//     const completeData = useMemo(() => {
//         let computedComments = completed;

//         if (search) {
//             computedComments = computedComments.filter(
//                 complete =>
//                 complete.name.toLowerCase().includes(search.toLowerCase()) ||
//                 complete.email.toLowerCase().includes(search.toLowerCase()) ||
//                 complete.city.toLowerCase().includes(search.toLowerCase())||
//                 complete.address.toLowerCase().includes(search.toLowerCase())
//             );
//         }

//         setTotalItems(computedComments.length);

//         //Sorting comments
//         if (sorting.field) {
//             const reversed = sorting.order === "asc" ? 1 : -1;
//             computedComments = computedComments.sort(
//                 (a, b) =>
//                     reversed * a[sorting.field].localeCompare(b[sorting.field])
//             );
//         }

//         //Current Page slice
//         return computedComments.slice(
//             (currentPage - 1) * ITEMS_PER_PAGE,
//             (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
//         );
//     }, [completed, currentPage, search, sorting]);

//     return (
//         <>
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
//                         <div className="col-md-6 d-flex flex-row-reverse">
//                             <Search
//                                 onSearch={value => {
//                                     setSearch(value);
//                                     setCurrentPage(1);
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     <table className="table table-striped">
//                         <TableHeader
//                             headers={headers}
//                             onSorting={(field, order) =>
//                                 setSorting({ field, order })
//                             }
//                         />
//                         <tbody>
//                             {completeData.map(user => (
//                                 <tr>
//                                     <th scope="row" key={complete.id}>
//                                         {complete.id}
//                                     </th>
//                                     <td>{complete.name}</td>
//                                     <td>{complete.email}</td>
//                                     <td>{complete.phoneNumber}</td>
//                                     <td>{complete.city}</td>
//                                     <td>{complete.address}</td>
//                                     <td>   <Button variant="danger" onClick={() => {

//                                         Swal.fire({
//                                             title: 'Are you sure?',
//                                             text: 'You will not be able to recover this User Details!',
//                                             icon: 'warning',
//                                             showCancelButton: true,
//                                             confirmButtonText: 'Yes, delete it!',
//                                             cancelButtonText: 'No, keep it'
//                                         }).then((result) => {
//                                             if (result.value) {
//                                                 Swal.fire(
//                                                     'Deleted!',
//                                                     'The User details has been deleted.',
//                                                     // 'success'
//                                                 )
//                                             } else if (result.dismiss === Swal.DismissReason.cancel) {
//                                                 Swal.fire(
//                                                     'Cancelled',
//                                                     'The User details is not deleted :)',
//                                                     // 'error'
//                                                 )
//                                             }
//                                         })


//                                     }}>DELETE</Button> </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             {loader}
//         </>
//     );
// };

// export default Completed;
