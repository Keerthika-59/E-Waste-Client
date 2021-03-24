import React from 'react';
import './repPending.css';

const Pending = () => {
  return(
    <>
    
    <div className="cards justify-content-center" style={{width:'650px'}}>
        <div className="card-header bg-white">
        <h3 className="pendingHeading">Pending activities</h3>
            <div className="row justify-content-between">
            
            <br/>
                <div className="col">
                    <p className="text-muted"> Activity ID <span className="font-weight-bold text-dark">1222528743</span></p>
                </div>
                <div className="col">
                <p className="text-muted"> Placed On <span className="font-weight-bold text-dark">19th March,2021</span> </p>
                </div>
            </div>
        </div>
        <br/>
        {/* <div className="card-header bg-white"> */}
        <div className="row justify-content-between">
            
            <br/>
                <div className="col">
                <form>
                <div class="form-row">
                    <div class="col">
                    <label for="bio">Biodegradable</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="id">Non-biodegradable</label>
                    <input type="text" class="form-control"/>
                    </div>
                    <div class="col">
                    <label for="id">Donation</label>
                    <input type="text" class="form-control"/>
                    </div>
                    <div class="col">
                    <label for="id">Category</label>
                    <input type="text" class="form-control"/>
                    </div>
                </div>
                <br/>
                <div class="form-row">
                    <div class="col">
                    <label for="bio">User Name</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="id">User Number</label>
                    <input type="text" class="form-control"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                    <label for="bio">User Address</label>
                    <input type="text" class="form-control" />
                    </div>
                </div>
                </form>
                </div>
            </div>
            <br/>
        {/* </div> */}
        {/* <div className="card-foot bg-white px-sm-3 pt-sm-4 px-0">
        <div className="row text-center ">
                <div className="col my-auto border-line ">
                    <button type="button" className="btn btn-warning btn-sm btn-block">Edit</button>
                </div>
                <div className="col my-auto border-line ">
                    <button type="button" className="btn btn-danger btn-sm btn-block">Cancel</button>
                </div>
            </div>
        </div> */}
    </div>
    </>
  );
}

export default Pending;
