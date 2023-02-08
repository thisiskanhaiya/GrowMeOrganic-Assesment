import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
// MUI for input form 
import {useNavigate} from 'react-router-dom';
//importing Hook for navigation


// --------------------- Home page ---------------------------

const Home: React.FC = () => {
  const navigate = useNavigate();  
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
// storing input data in perticular field 


  // function to handle submit form  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ name, phoneNumber, email }));
    // store data at localStorage by converting it in to json 
    navigate("/logged");
    // navigated to second page 
  };

  return (
    
    // created form using Material UI
    
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value as string)}
          required
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(event) =>
            setPhoneNumber(event.target.value as string)
          }
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value as string)}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
   
  );
};
export default Home