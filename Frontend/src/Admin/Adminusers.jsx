import React, { useState ,useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';
import Usercard from '../components/Usercard';


export default function Adminusers() {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/ausers`)
          .then(response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.error("Error fetching the Users:", error);
          });
      }, []);
      console.log(users)
      const handleRemove = (userId) => {
        setUsers(users.filter(item => item._id !== userId));
      };


  return (
    <>
    <AdminNavbar/>
    <div className='m-20'>
     {users.map((item) => (
            <Usercard key={item._id} item={item} onRemove={handleRemove} />
          ))}
     </div>
    </>
  )
}
