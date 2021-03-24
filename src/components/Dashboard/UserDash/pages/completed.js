import React from 'react';
import './completed.css';
import { useState } from "react";

const Completed = () => {
  const [completed, setCompleted] = useState([]);

    return(
     <>
       {/* <div class="container">
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
                                <li class="event" data-date="22/03/2021">
                                    <h3>Activity ID</h3>
                                    <p>Representative name</p>
                                </li>
                                <li class="event" data-date="22/03/2021">
                                    <h3>Activity ID</h3>
                                    <p>Representative name</p>
                                </li>
                                <li class="event" data-date="22/03/2021">
                                    <h3>Activity ID</h3>
                                    <p>Representative name</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
       
       <div class="container py-5">
  <header class="text-center text-white">
    <h1 class="display-4">Bootstrap Datatables</h1>
    <p class="lead mb-0">Using Bootstrap 4 and <a href="https://datatables.net/examples/styling/bootstrap4.html" class="text-white font-italic">
        <u>Datatables</u></a>, add interaction controlsto your HTML tables.</p>
    <p class="font-italic">Snippet By
      <a href="https://bootstrapious.com" class="text-white">
        <u>Bootstrapious</u>
      </a>
    </p>
  </header>
  <div class="row py-5">
    <div class="col-lg-10 mx-auto">
      <div class="card rounded shadow border-0">
        <div class="card-body p-5 bg-white rounded">
          <div class="table-responsive">
            <table id="example" style="width:100%" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>$170,750</td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009/01/12</td>
                  <td>$86,000</td>
                </tr>
                <tr>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012/03/29</td>
                  <td>$433,060</td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td>$162,700</td>
                </tr>
                <tr>
                  <td>Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>61</td>
                  <td>2012/12/02</td>
                  <td>$372,000</td>
                </tr>
                <tr>
                  <td>Herrod Chandler</td>
                  <td>Sales Assistant</td>
                  <td>San Francisco</td>
                  <td>59</td>
                  <td>2012/08/06</td>
                  <td>$137,500</td>
                </tr>
                <tr>
                  <td>Rhona Davidson</td>
                  <td>Integration Specialist</td>
                  <td>Tokyo</td>
                  <td>55</td>
                  <td>2010/10/14</td>
                  <td>$327,900</td>
                </tr>
                <tr>
                  <td>Colleen Hurst</td>
                  <td>Javascript Developer</td>
                  <td>San Francisco</td>
                  <td>39</td>
                  <td>2009/09/15</td>
                  <td>$205,500</td>
                </tr>
                <tr>
                  <td>Sonya Frost</td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td>$103,600</td>
                </tr>
                <tr>
                  <td>Jena Gaines</td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td>$90,560</td>
                </tr>
                <tr>
                  <td>Quinn Flynn</td>
                  <td>Support Lead</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2013/03/03</td>
                  <td>$342,000</td>
                </tr>
                <tr>
                  <td>Charde Marshall</td>
                  <td>Regional Director</td>
                  <td>San Francisco</td>
                  <td>36</td>
                  <td>2008/10/16</td>
                  <td>$470,600</td>
                </tr>
                <tr>
                  <td>Haley Kennedy</td>
                  <td>Senior Marketing Designer</td>
                  <td>London</td>
                  <td>43</td>
                  <td>2012/12/18</td>
                  <td>$313,500</td>
                </tr>
                <tr>
                  <td>Tatyana Fitzpatrick</td>
                  <td>Regional Director</td>
                  <td>London</td>
                  <td>19</td>
                  <td>2010/03/17</td>
                  <td>$385,750</td>
                </tr>
                <tr>
                  <td>Michael Silva</td>
                  <td>Marketing Designer</td>
                  <td>London</td>
                  <td>66</td>
                  <td>2012/11/27</td>
                  <td>$198,500</td>
                </tr>
                <tr>
                  <td>Paul Byrd</td>
                  <td>Chief Financial Officer (CFO)</td>
                  <td>New York</td>
                  <td>64</td>
                  <td>2010/06/09</td>
                  <td>$725,000</td>
                </tr>
                <tr>
                  <td>Gloria Little</td>
                  <td>Systems Administrator</td>
                  <td>New York</td>
                  <td>59</td>
                  <td>2009/04/10</td>
                  <td>$237,500</td>
                </tr>
                <tr>
                  <td>Bradley Greer</td>
                  <td>Software Engineer</td>
                  <td>London</td>
                  <td>41</td>
                  <td>2012/10/13</td>
                  <td>$132,000</td>
                </tr>
                <tr>
                  <td>Dai Rios</td>
                  <td>Personnel Lead</td>
                  <td>Edinburgh</td>
                  <td>35</td>
                  <td>2012/09/26</td>
                  <td>$217,500</td>
                </tr>
                <tr>
                  <td>Jenette Caldwell</td>
                  <td>Development Lead</td>
                  <td>New York</td>
                  <td>30</td>
                  <td>2011/09/03</td>
                  <td>$345,000</td>
                </tr>
                <tr>
                  <td>Yuri Berry</td>
                  <td>Chief Marketing Officer (CMO)</td>
                  <td>New York</td>
                  <td>40</td>
                  <td>2009/06/25</td>
                  <td>$675,000</td>
                </tr>
                <tr>
                  <td>Caesar Vance</td>
                  <td>Pre-Sales Support</td>
                  <td>New York</td>
                  <td>21</td>
                  <td>2011/12/12</td>
                  <td>$106,450</td>
                </tr>
                <tr>
                  <td>Doris Wilder</td>
                  <td>Sales Assistant</td>
                  <td>Sidney</td>
                  <td>23</td>
                  <td>2010/09/20</td>
                  <td>$85,600</td>
                </tr>
                <tr>
                  <td>Angelica Ramos</td>
                  <td>Chief Executive Officer (CEO)</td>
                  <td>London</td>
                  <td>47</td>
                  <td>2009/10/09</td>
                  <td>$1,200,000</td>
                </tr>
                <tr>
                  <td>Gavin Joyce</td>
                  <td>Developer</td>
                  <td>Edinburgh</td>
                  <td>42</td>
                  <td>2010/12/22</td>
                  <td>$92,575</td>
                </tr>
                <tr>
                  <td>Jennifer Chang</td>
                  <td>Regional Director</td>
                  <td>Singapore</td>
                  <td>28</td>
                  <td>2010/11/14</td>
                  <td>$357,650</td>
                </tr>
                <tr>
                  <td>Brenden Wagner</td>
                  <td>Software Engineer</td>
                  <td>San Francisco</td>
                  <td>28</td>
                  <td>2011/06/07</td>
                  <td>$206,850</td>
                </tr>
                <tr>
                  <td>Fiona Green</td>
                  <td>Chief Operating Officer (COO)</td>
                  <td>San Francisco</td>
                  <td>48</td>
                  <td>2010/03/11</td>
                  <td>$850,000</td>
                </tr>
                <tr>
                  <td>Shou Itou</td>
                  <td>Regional Marketing</td>
                  <td>Tokyo</td>
                  <td>20</td>
                  <td>2011/08/14</td>
                  <td>$163,000</td>
                </tr>
              </tbody>
            </table>
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
