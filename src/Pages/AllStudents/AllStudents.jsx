import React, { useEffect, useState } from 'react';
import axios from "../../api/axios"

const allStuds = "/users/allusers"

const AllStudents = () => {
  const [users, setUsers] = useState([])
  const getUsers =async()=>{
    try{
      const res = await axios.get(allStuds)
      // console.log(res.data.data)
      const users = res.data.data;
      const filteredUsers = users.filter((e)=> e.stack !== "Tutor");
      // console.log(filteredUsers);
      setUsers(filteredUsers)
    }catch(error){
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }
  useEffect(()=>{
    getUsers()
  }, [])
  return (
    <div className="all-body">
      <div className="all-head">
        <div className="all-filter">All</div>
        <div className="all-search">Search</div>
      </div>
      <div className="all-user-info">
      <table className="assessment-table-holder">
          <tr className="assessment-table">
            <th className="assessment-table-title"></th>
            <th className="assessment-table-title">NAME</th>
            <th className="assessment-table-title">STACK</th>
            <th className="assessment-table-title">EMAIL</th>
            {/* <th className="assessment-table-title">CLASS ASSESSMENT</th> */}
          </tr>
            {/* <form> */}
            {users.map((props)=>(
              <tr className="assessment-user-info" key={props._id}>
                <td><img src={props.image} alt="imae" className="assessment-image"/></td>
                <td><div className="assessment-item">{props.name}</div></td>
                <td>{props.stack}</td>
                <td>{props.email}</td>
              </tr>
            ))}
        </table>
      </div>
      </div>
  )
}

export default AllStudents