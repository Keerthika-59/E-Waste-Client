/* eslint-disable */
import React, {useState} from 'react'
import './contactStyle.css';

export const InputForm = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    if(name && email && message) {

      console.log(name, email, message);

    }
  }

  return(
  <div className="contact2" style={{backgroundImage: `url("https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg")` }}>
  <div className="container">
    <div className="row contact-container">
      <div className="col-lg-12">
        <div className="card card-shadow border-0 mb-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box p-4">
                <h4 className="title">Contact Us</h4>
                    <form onSubmit={handleContactSubmit} >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                            <input className="form-control" onChange={ (e) => setName(e.target.value)}  type="text" required={true} placeholder="Name"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                            <input className="form-control" onChange={(e) => setEmail(e.target.value)} type="email" required={true} placeholder="Email"/>
                      </div>
                    </div>                 
                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                            <input className="form-control" onChange={(e) => setMessage(e.target.value)} type="text" required={true} placeholder="Message"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i className="ti-arrow-right"></i></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 bg-image" style={{backgroundImage: `url("https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg")`}}>
              <div className="detail-box p-4">
                <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                <p className="text-white op-7">Mindtree
                  <br/>Bhubaneshwar </p>
                <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                <p className="text-white op-7">9876543209
                  <br/> 9253623732 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

