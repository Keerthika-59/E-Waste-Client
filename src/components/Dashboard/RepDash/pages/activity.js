import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Form, Button, FormLabel } from 'react-bootstrap';
import './activity.css';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../UserSidebar';
const notify = () => toast.success('Submitted successfully!');

const Activity = () => {
    const [bio, setBio] = useState(false);
    const [nonbio, setNonbio] = useState(false);
    const [donation, setDonation] = useState(false);  
    const [type1, setType1] = useState(false); 
    const [type2, setType2] = useState(false); 
    const [type3, setType3] = useState(false); 
    const [type4, setType4] = useState(false); 
    const [type5, setType5] = useState(false); 

    const handleContactSubmit = e => {
        
            e.preventDefault();

                const newData = {
                    bio,
                    nonbio,
                    donation,
                    type1,
                    type2,
                    type3,
                    type4,
                    type5
                };
            console.log(newData);
  
      };
   
  return(
    <div>
        dashboard
    </div>
    // <div class="container">
	//     <div class="row">
	//     <div class="holder">
            
    //     <form onSubmit={handleContactSubmit} >
	// 		<table width="100%">
    //             <thead>
                
    //                 <th class="actHeading">
    //                     Create User activity
    //                 </th>
                
    //             </thead>
	// 			<tr>
	// 				<td>Biodegradable</td>
	// 				<td>
	// 					<div>
	// 						<input type="checkbox" value = {bio} onChange={ (e) => setBio(e.target.checked)}/>
	// 					    <span></span>
	// 					</div>
	// 				</td>
	// 			</tr>
	// 			<tr>
	// 				<td>Non-Biodegradable</td>
	// 				<td>
	// 					<div>
	// 						<input type="checkbox" value = {nonbio} onChange={ (e) => setNonbio(e.target.checked)} />
	// 					    <span></span>
	// 					</div>
	// 				</td>
	// 			</tr>
	// 			<tr>
	// 				<td class="donation">Donation</td>
	// 				<td>
	// 					<div>
	// 						<input type="checkbox" value = {donation} onChange={ (e) => setDonation(e.target.checked)}/>
                            
	// 					    <span></span>
	// 					</div>
	// 				</td>

	// 			</tr>
    //             <br/>
    //             {(donation===true)?
	// 			<tr >
	// 				<td colspan="2" class="last">
    //                 <ul class="list-group">
    //                         <li class="list-group-item rounded-0">
    //                             <div class="custom-control custom-checkbox">
    //                                 <input class="custom-control-input" id="customCheck1" type="checkbox" value = {type1} onChange={ (e) => setType1(e.target.checked)}/>
    //                                 <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck1">Stationery</label>
    //                             </div>
    //                         </li>
    //                         <li class="list-group-item">
    //                             <div class="custom-control custom-checkbox">
    //                                 <input class="custom-control-input" id="customCheck2" type="checkbox" value = {type2} onChange={ (e) => setType2(e.target.checked)}/>
    //                                 <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck2">Clothes</label>
    //                             </div>
    //                         </li>
    //                         <li class="list-group-item">
    //                             <div class="custom-control custom-checkbox">
    //                                 <input class="custom-control-input" id="customCheck3" type="checkbox" value = {type3} onChange={ (e) => setType3(e.target.checked)}/>
    //                                 <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck3">Food</label>
    //                             </div>
    //                         </li>
    //                         <li class="list-group-item">
    //                             <div class="custom-control custom-checkbox">
    //                                 <input class="custom-control-input" id="customCheck4" type="checkbox" value = {type4} onChange={ (e) => setType4(e.target.checked)}/>
    //                                 <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck4">Electronic items</label>
    //                             </div>
    //                         </li>
    //                         <li class="list-group-item rounded-0">
    //                             <div class="custom-control custom-checkbox">
    //                                 <input class="custom-control-input" id="customCheck5" type="checkbox" value = {type5} onChange={ (e) => setType5(e.target.checked)}/>
    //                                 <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck5">Toys</label>
    //                             </div>
    //                         </li>
    //                     </ul>
                    
	// 				</td>
	// 			</tr>:''
    //             }
	// 			<tr>
	// 				<td colspan="2">
	// 					<input type="submit" value="Submit" onSubmit={handleContactSubmit} />
	// 				</td>
	// 			</tr>
	// 		</table>
    //         </form>
	// 	</div>
	//     </div>
    // </div>
    
  )
}
export default Activity;


