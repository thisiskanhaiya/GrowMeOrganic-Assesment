import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { height, width } from '@mui/system';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const Secondpage: React.FC= () => {
  const auth = localStorage.getItem('user');
  const [users, setUsers] = useState<User[]>([]);
  if (!auth) {
    alert("You must have to enter your details before accessing this page");
    return <Navigate to="/"/>;
  }
  const [columns, setColumns] = useState([
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 250 },
  ]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
      console.log(users);
  }, []);
  
  return (

    <div>
      <center>
      <h1>Welcome to the second page</h1>
      <p>Your details: {auth}</p>
      <div style={{height: "80vh" , width:"133.5vh"}}>
        <DataGrid rows={users} columns={columns} />
      </div>
      </center>
    </div>

  );
};
export default  Secondpage