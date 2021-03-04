import React from 'react';
import {UserForm} from './Components/Login/userLogin';
import {RepForm} from './Components/Login/representativeLogin';

const App = () => {
  return (
    <div className="container mt-4">
        <UserForm />
        <RepForm />
  </div>
  );
};

export default App;