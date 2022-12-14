import React, { useEffect, useState, useMemo } from "react";
// import Header from "./Header";
import APIHelper from '../API/apihelper2'
import axios from 'axios'
import { TableHeader, Pagination, Search } from "./DashboardPages/Tablecomponent";
import useFullPageLoader from "./DashboardPages/useFullPageLoader";
import { Button, Card } from 'react-bootstrap'
import './Test.css'

import './style.css'
// import AppConfig from "App.config";

import Swal from 'sweetalert2'

const TableVerifiedRep = () => {
    const [reps, setReps] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 7;

    const url = 'https://ewaste-dec20-dev-api.azurewebsites.net/'

    const headers = [
        { name: "No#", field: "id", sortable: false },
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Phone Number", field: "phonenumber", sortable: false },
        { name: "City", field: "city", sortable: true },
        { name: "Address", field: "address", sortable: true },
        { name: "Action", field: "body", sortable: false }

    ];

    // const url1 = 'http://localhost:5000/admin/representatives/unverified'
    const url2 = 'https://ewaste-dec20-dev-api.azurewebsites.net/admin/representatives/unverified'


    useEffect(() => {
        const getData = () => {

            showLoader();

            fetch(`${url2}`)
                .then(response => response.json())
                .then(json => {
                    hideLoader();
                    setReps(json);
                });
        };

        getData();
    }, [reps]);

    const repsData = useMemo(() => {
        let computedComments = reps;

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
    }, [reps, currentPage, search, sorting]);

    return (<>
        <div className="row w-100">
            <div className="col mb-3 col-12 text-center">
                <h3>Verify representatives</h3>

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
            </div>

            {
                repsData.map(rep => (
                    <div className="verify">
                        <Card className='verifyrep card text-white bg-secondary'>
                            <img src={`${rep.idProof}`}
                                alt='No ID Proof Provided'
                                width='300'
                                height='300'
                                className="rounded mb-5 img-thumbnail"
                                style={{ color: "black" }} />
                            {rep.isVerified && <button type="button" class="btn btn-success status1">verified</button>}<hr />
                            {/* {!rep.isVerified && <button type="button" class="btn btn-danger status1">Not Verified</button>} */}
                            <Card.Text>
                                <div class="media-body mb-5 text-white">
                                    <h4 class="mt-0 mb-0"> {rep.name} </h4>
                                    <p class="small mb-5"> <i class="fas fa-map-marker-alt mr-3"></i> {rep.city} </p>
                                </div>

                                {!rep.isVerified && <Button className="py-2 mx-3 my-2 " variant="success"

                                    onClick={() => {

                                        Swal.fire({
                                            title: 'Are you sure to verify the representative?',
                                            icon: 'question',
                                            showCancelButton: true,
                                            confirmButtonText: 'Verify',
                                            cancelButtonText: 'Cancel'
                                        }).then((result) => {
                                            if (result.value) {
                                                Swal.fire(
                                                    'Successfully Verified',
                                                    'Representative has been verified.',
                                                )
                                                axios.put(`${url}admin/representative/${rep._id}`);

                                            }
                                        })
                                    }}

                                > Verify  </Button>}
                                {!rep.isVerified && <Button className="py-2 px-2 mx-2 my-3 mx-auto" variant="danger"

                                    onClick={() => {
                                        Swal.fire({
                                            title: 'Are you sure you want to reject the representative?',
                                            text: 'This may delete the representative account',
                                            icon: 'question',
                                            showCancelButton: true,
                                            confirmButtonText: 'reject',
                                            cancelButtonText: 'Cancel'
                                        }).then((result) => {
                                            if (result.value) {
                                                Swal.fire(
                                                    'Rejected',
                                                    'Representative has been rejected.',
                                                )
                                                axios.delete(`${url}admin/rep/${rep._id}`)
                                            }
                                        })
                                    }}

                                > Reject  </Button>}</Card.Text>


                        </Card>

                    </div>

                ))
            }

        </div>
        {/* {loader} */}
    </>);
};

export default TableVerifiedRep;
