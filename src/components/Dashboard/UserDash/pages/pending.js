import React from 'react';
import './pending.css';

const Pending = () => {
  return(
    <>
    
    <div className="cards px-3 py-2 my-4 mx-4 justify-content-center" style={{width:'650px'}}>
        <div className="card-header bg-white">
        <h3 className="pendingHeading">Pending activities</h3>
            <div className="row justify-content-between">
            
            <br/>
                <div className="col">
                    <p className="text-muted"> Activity ID <span className="font-weight-bold text-dark">1222528743</span></p> <br/>
                    <p className="text-muted"> Placed On <span className="font-weight-bold text-dark">19th March,2021</span> </p>
                </div>
                <div class="flex-col my-auto">
                    <h6 class="ml-auto mr-3"> <a href="#">View Details</a> </h6>
                </div>
            </div>
        </div>
        <div className="card-foot bg-white px-sm-3 pt-sm-4 px-0">
            <div className="row text-center ">
                <div className="col my-auto border-line ">
                    <button type="button" className="btn btn-danger btn-sm btn-block">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Pending;