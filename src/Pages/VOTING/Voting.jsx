import React, {useState, useEffect} from 'react'
import "./voting.css"
import {MdOutlineHowToVote} from "react-icons/md";
import axios from "axios"

const Voting = () => {
  const [users, setUsers] = useState([]);

  const getUsers =async()=>{
    try{
      const res = await axios.get("http://localhost:4400/users/allusers")
      console.log(res.data.data)
      setUsers(res.data.data)
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
    <div className="voting-main">
    <p className="voting-title">Cast your vote</p>
      <div className="voting-cards-holder">
        {
          users.map((props)=>
          <div className="voting-card" key={props.id}>
          <img src={props.image} alt="img" className="voting-card-image" />
          <div className="voting-card-info">
          <p className="voting-card-name">{props.name}</p>
          <p className="voting-card-stack">{props.stack}</p>
          <p className="voting-card-rating">Rating: 79%</p>
          <button className="voting-card-button"> <MdOutlineHowToVote/><span>vote</span></button>
          </div>
        </div>)
        }
      </div>
    </div>
  )
}

export default Voting