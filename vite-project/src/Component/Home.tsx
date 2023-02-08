import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ name, phoneNumber, email }));
    navigate("/logged");
    // console.log(name, phoneNumber, email);
    // setName('');
    // setPhoneNumber('');
    // setEmail('');
  };

  return (
    
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