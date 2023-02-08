import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { height, width } from '@mui/system';
// importing necessory things 

// Ts interface
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}


// -----------page component --------------------

const Secondpage: React.FC= () => {
  const auth = localStorage.getItem('user');
  // assign data which stored on local storage to auth 

  // if auth is empty it won't give access of this page to user 
  if (!auth) {
    alert("You must have to enter your details before accessing this page");
    return <Navigate to="/"/>;
  }
 


// Hook for storing featched data 
  const [users, setUsers] = useState<User[]>([]);

  const [columns, setColumns] = useState([
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 250 },
  ]);

  // Featching Data by using api i used useEffect (fetch.then) we also can use axios 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
      console.log(users);
  }, []);
  
  return (
// Showing data in table with datagrid of MUI
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