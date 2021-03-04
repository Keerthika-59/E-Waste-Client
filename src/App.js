import React from 'react';
import { UserForm } from './Components/Login/userLogin';
import { RepForm } from './Components/Login/representativeLogin';
import { InputForm } from "./Components/Contact/InputForm";

const App = () => {
  return (
    <div className="container mt-4">
      <UserForm />
      <RepForm />
      <InputForm />
    </div>
  );
};

export default App;