import React from 'react';
// import { UserForm } from './Components/Login/userLogin';
// import { RepForm } from './Components/Login/representativeLogin';
// import { InputForm } from "./Components/Contact/InputForm";

import UserRegister from "./Components/Registration/UserRegister"
// import RepresenativeRegister from "./Components/Registration/RepresentativeRegister"



const App = () => {
  return (
    <div className="container mt-4">
      <UserRegister />   
      {/* <RepresenativeRegister /> */}

       {/* <UserForm />
       <RepForm />
       <InputForm /> */}

    </div>
  );
};

export default App;