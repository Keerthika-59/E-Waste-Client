import React, { useEffect, useState, useMemo } from "react";
// import Header from "./Header";
import { TableHeader, Pagination, Search } from "./DashboardPages/Tablecomponent";
import useFullPageLoader from "./DashboardPages/useFullPageLoader";
// import AppConfig from "App.config";
import Swal from 'sweetalert2'
import {Button,Table} from 'react-bootstrap'

const UserCompletedActivities = () => {
    const [compActivity, setCompActivity] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 5;

    const headers = [
        { name: "Activity Id", field: "ActivityId", sortable: false },
        { name: "Bio", field: "bio", sortable: false },
        { name: "Non-Bio", field: "nonBio", sortable: false },
        { name: "Donation", field: "donation", sortable: true },
        { name: "Representative Id", field: "repId", sortable: false }

    ];

    useEffect(() => {
        const getData = () => {
            showLoader();

            fetch("https://ewaste-dec20-dev-api.azurewebsites.net/reps")
                .then(response => response.json())
                .then(json => {
                    hideLoader();
                    setCompActivity(json);
                });
        };

        getData();
    }, []);

    const UserCompActData = useMemo(() => {
        let compAct = compActivity;

        if (search) {
            compAct = compAct.filter(
                act =>
                    act.donation.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(compAct.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            compAct = compAct.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return compAct.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [compActivity, currentPage, search, sorting]);

    return (
        <>
            {/* <ExternalInfo page="datatable" /> */}

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        {/* <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div> */}
                       
                        
                            <Search
                           
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                    </div>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Activity Id</th>
                                    <th>Bio</th>
                                    <th>Non-Bio</th>
                                    <th>Donation</th>
                                    <th>Representative Id</th>
                                </tr>
                            </thead>
                        <tbody>

                            {UserCompActData.map(act => (
                                <tr>
                                    <td>{act._id}</td>
                                    <td>{act.bioWaste}</td>
                                    <td>{act.nonBioWaste}</td>
                                    <td>{act.donation}</td>
                                    <td>{act.repId}</td>

                                </tr>
                            ))}
                        </tbody>
                        </Table>
                </div>
                <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
            </div>
            {loader}
        </>
    );
};

export default UserCompletedActivities;
