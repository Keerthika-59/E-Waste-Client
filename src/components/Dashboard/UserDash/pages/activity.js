import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Form, Button, FormLabel } from 'react-bootstrap';
import './activity.css';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../UserSidebar';
import { BsColumnsGap } from 'react-icons/bs';
const notify = () => toast.success('Submitted successfully!');

// const API_URL  = 'https://ewaste-dec20-dev-api.azurewebsites.net/';

const Activity = (props) => {
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
           
            let newData;
            if(donation==false)
            {
                 newData = {
                    bio,
                    nonbio,
                    donation,
                    type1:false,
                    type2:false,
                    type3:false,
                    type4:false,
                    type5:false
                };
            }
            
            else if(donation==true && type1==false && type2==false && type3==false && type4==false && type5==false){
                // setDonation(false);
                newData = {
                    bio,
                    nonbio,
                    donation:false,
                    type1,
                    type2,
                    type3,
                    type4,
                    type5
                };
                // console.log(donation);
                alert("Choose one category!");
            }
            else{
                newData = {
                    bio,
                    nonbio,
                    donation,
                    type1,
                    type2,
                    type3,
                    type4,
                    type5
                };
            }
            
            console.log(newData);
             
    //   axios
    //   .post(API_URL, newData)
    //   .then(res => { 
        
    //       setBio('');
    //       setNonbio('');
    //       setDonation('');
    //       setType1('');
    //       setType2('');
    //       setType3('');
    //       setType4('');
    //       setType5('');
        
    //       setTimeout(() => {
    //         history.push('/');
    //       }, 3000);

    //       console.log(res.data)

    //   })

    };

  return(
    
    <div class="container">
	    <div class="row">
	    <div class="holder">
            
        <form onSubmit={handleContactSubmit}  className="form-content">
			<table width="100%">
                <thead>
                
                    <th class="actHeading">
                       User activity
                    </th>
                
                </thead>
				<tr>
					<td>Biodegradable</td>
					<td>
                    <div class="outerDivFull" >
                            <div class="switchToggle">
                                <input type="checkbox" id="switch" value = {bio} onChange={ (e) => setBio(e.target.checked)} />
                                <label for="switch"></label>
                            </div>
                    </div>
					</td>
				</tr>
				<tr>
					<td>Non-Biodegradable</td>
					<td>
                    <div class="outerDivFull" >
                            <div class="switchToggle">
                                <input type="checkbox" id="switch1" value = {nonbio} onChange={ (e) => setNonbio(e.target.checked)} />
                                <label for="switch1"></label>
                            </div>
                    </div>
					</td>
				</tr>
				<tr>
					<td class="donation">Donation</td>
					<td>
                    <div class="outerDivFull" >
                            <div class="switchToggle">
                                <input type="checkbox" id="switch2" value = {donation} onChange={ (e) => setDonation(!donation)} />
                                <label for="switch2"></label>
                            </div>
                    </div>
					</td>

				</tr>
                <br/>
                {(donation===true)?
				<tr >
					<td colspan="2" class="last">
                    <ul class="list-group">
                            <li class="list-group-item rounded-0">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck1" type="checkbox" value = {type1} onChange={ (e) => setType1(e.target.checked)}/>
                                    <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck1">Stationery</label>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck2" type="checkbox" value = {type2} onChange={ (e) => setType2(e.target.checked)}/>
                                    <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck2">Clothes</label>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck3" type="checkbox" value = {type3} onChange={ (e) => setType3(e.target.checked)}/>
                                    <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck3">Food</label>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck4" type="checkbox" value = {type4} onChange={ (e) => setType4(e.target.checked)}/>
                                    <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck4">Electronic items</label>
                                </div>
                            </li>
                            <li class="list-group-item rounded-0">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck5" type="checkbox" value = {type5} onChange={ (e) => setType5(e.target.checked)}/>
                                    <label class="cursor-pointer font-italic d-block custom-control-label" for="customCheck5">Toys</label>
                                </div>
                            </li>
                        </ul>
                    
					</td>
				</tr>:''
                }
				<tr>
					<td colspan="2">
						<input type="submit" value="Submit" onSubmit={handleContactSubmit} />
					</td>
				</tr>
			</table>
            </form>
		</div>
	    </div>
    </div>
    
  )
}
export default Activity;

