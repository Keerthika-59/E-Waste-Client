import React, { useEffect, useState, useMemo } from "react";
// import Header from "./Header";
import APIHelper from '../API/apihelper2'

import { TableHeader, Pagination, Search } from "./DashboardPages/Tablecomponent";
import useFullPageLoader from "./DashboardPages/useFullPageLoader";
import { Button, Card } from 'react-bootstrap'

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

    const ITEMS_PER_PAGE = 2;

    const headers = [
        { name: "No#", field: "id", sortable: false },
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Phone Number", field: "phonenumber", sortable: false },
        { name: "City", field: "city", sortable: true },
        { name: "Address", field: "address", sortable: true },
        { name: "Action", field: "body", sortable: false }

    ];

    useEffect(() => {
        const getData = () => {

            showLoader();

            fetch(`${APIHelper.API_URL}`)
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
                <div className="row">
                    <div className="col-md-6">
                        <Pagination
                            total={totalItems}
                            itemsPerPage={ITEMS_PER_PAGE}
                            currentPage={currentPage}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                    <div className="col-md-6 d-flex flex-row-reverse">
                        <Search
                            onSearch={value => {
                                setSearch(value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>
            </div>

            {
                repsData.map(rep => (
                    <div className="col-10  my-3">
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-0 pb-4 cover">

                                <div className="media align-items-end profile-head">
                                    <div class="profile mr-5">
                                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                            alt="..."
                                            width='230'
                                            height='230'
                                            class="rounded mb-5 img-thumbnail" />
                                    </div>
                                    <div class="media-body mb-5 text-white">
                                        <h4 class="mt-0 mb-0"> {rep.name} </h4>
                                        <p class="small mb-5"> <i class="fas fa-map-marker-alt mr-3"></i> {rep.city} </p>
                                    </div>

                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto' style={{ background: 'white' }}  >
                            <Button className="py-2 mx-3 my-2 " variant="success"

                                onClick={() => {

                                    Swal.fire({
                                        title: 'Are you sure to verify the representative?',
                                        icon: 'success',
                                        showCancelButton: true,
                                        confirmButtonText: 'Verify',
                                        cancelButtonText: 'Cancel'
                                    }).then((result) => {
                                        if (result.value) {
                                            Swal.fire(
                                                'Successfully Verified',
                                                'Representative has been verified.',
                                            )
                                        }
                                    })
                                }}
                                
                            > Verify  </Button>
                            <Button className="py-2 px-2 mx-2 my-3 mx-auto" variant="danger" > Reject  </Button>
                        </div>
                    </div>

                ))
            })

            </div>
        {/* {loader} */}
    </>);
};

export default TableVerifiedRep;
