import React, { useEffect, useState, useMemo } from "react";
// import Header from "./Header";
import APIHelper from '../API/apihelper2'
import { TableHeader, Pagination, Search } from "./DashboardPages/Tablecomponent";
import useFullPageLoader from "./DashboardPages/useFullPageLoader";
// import AppConfig from "App.config";
import Swal from 'sweetalert2'
import { Button ,Table} from 'react-bootstrap'
import axios from 'axios'


const AdminCompletedActivities = () => {
    const [data, setReps] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 9;

    const headers = [
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Phone Number", field: "phonenumber", sortable: false },
        { name: "City", field: "city", sortable: true },
        { name: "Address", field: "address", sortable: true },
        { name: "Action", field: "body", sortable: false }

    ];

    const url = 'https://ewaste-dec20-dev-api.azurewebsites.net/'

    const urls='http://localhost:5000/activities/completed'

    useEffect(() => {
        const getData = () => {
            showLoader();

            fetch(`${urls}`)
                .then(response => response.json())
                .then(json => {
                    hideLoader();
                    setReps(json);
                    console.log(json)
                });
        };

        getData();
    }, [data]);

    const repsData = useMemo(() => {
        let computedComments = data;

        if (search) {
            computedComments = computedComments.filter(
                rep =>
                    rep.name.toLowerCase().includes(search.toLowerCase()) ||
                    rep.email.toLowerCase().includes(search.toLowerCase()) ||
                    rep.city.toLowerCase().includes(search.toLowerCase()) ||
                    rep.address.toLowerCase().includes(search.toLowerCase())

            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [data, currentPage, search, sorting]);

    return (
        <>
            {/* <ExternalInfo page="datatable" /> */}

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                    {/* <div className="col-md-6 d-flex flex-row-reverse" > */}
                        {/* <Search
                            onSearch={value => {
                                setSearch(value);
                                setCurrentPage(1);
                            }}
                        /> */}
                    {/* </div> */}
                    <h4>Completed Activities</h4>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Activity Id</th>
                                <th>User Name</th>
                                <th>Bio Waste</th>
                                <th>Non-Bio Waste</th>
                                <th>Donation</th>
                                <th>Representative Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {repsData.map(data => (
                                <tr>
                                    <td>{data._id}</td>
                                    <td>{data.userDetails.userName}</td>
                                    <td>{data.bioWaste ? 'Yes':"No"}</td>
                                    <td>{data.nonBioWaste ? 'Yes':'No'}</td>
                                    <td>{data.donation ? 'Yes':'No'}</td>
                                    { data.repDetails && <td>{data.repDetails.repName}</td>}

                                    {/* <td>{rep.repDetails.repId}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default AdminCompletedActivities;
