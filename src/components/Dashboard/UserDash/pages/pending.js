import React , { useState,useEffect }from 'react';
import './pending.css';

const Pending = () => {
    const [bio, setBio] = useState(false);
    const [nonbio, setNonbio] = useState(false);
    const [donation, setDonation] = useState(false);  
    const [type, setType] = useState([]); 
   

  return(
    <>
    
    <div className="cards px-3 py-2 my-4 mx-4 justify-content-center" style={{width:'700px'}}>
        <div className="card-header bg-white">
        <h3 className="pendingHeading">Pending activity</h3>
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
                    <input type="text" class="form-control" value = {bio} onChange={ (e) => setBio(e.target.value)}/>
                    </div>
                    <div class="col">
                    <label for="id">Non-biodegradable</label>
                    <input type="text" class="form-control" value = {nonbio} onChange={ (e) => setNonbio(e.target.value)}/>
                    </div>
                    <div class="col">
                    <label for="id">Donation</label>
                    <input type="text" class="form-control" value = {donation} onChange={ (e) => setDonation(e.target.value)}/>
                    </div>
                    <div class="col">
                    <label for="id">Category</label>
                    <input type="text" class="form-control" value = {type} onChange={ (e) => setType(e.target.checked)}/>
                    </div>
                </div>
                <br/>
                <div class="form-row">
                    <div class="col">
                    <label for="bio">Representative Name</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="id">Representative Number</label>
                    <input type="text" class="form-control"/>
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
