import React, { useEffect, useState } from 'react';
// import Image from "../../images/SOTW-SOTW.jpg"
import "./UserProfile.css";
import {useSelector} from "react-redux";
// import { AuthContext } from "../../Contexts/AuthProvider";
import axios from "axios";

const UserProfile = () => {
  const profile = useSelector((state) => state.Id.Id);
  const [ratings, setRatings] = useState();
  const getRatings =async()=>{
    try{
      const res = await axios.get(`https://sotw-app.onrender.com/rating/get/${profile._id}`)
      const rating = res.data.data;
      setRatings(rating);
    }catch(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }
  useEffect(()=>{
    getRatings()
  }, [])
  return (
    <main className="user-main">
    <div className="text">User Profile</div>
      <div className="user-holder">
      <article className="user-info">
        <div className='user-info-div'>
          <img className='user-image' src={profile.image} alt="" />
          <div className="user-detail">
            <p className="user-name">{profile.name}</p>
            <p className='user-talk'>{profile.email}</p>
            {/* <p className='user-talk'>Phone: {profile.phone}</p> */}
            <p className='user-talk'>Role: {profile.role}</p>
          </div>
        </div>
      </article>
      {
        profile.role !== "student"? null:<article className='user-assessment'>
        <p>Your Assessment History</p>
        <table style={{width: "100%"}}>
          <tr className="user-table-head">
            <th>WK </th>
            <th>PTY</th>
            <th>ASS</th>
            <th>CLASS P</th>
            <th>CLASS A</th>
            <th>P D</th>
            <th>AV. TOTAL 100%</th>
          </tr>
          {
            ratings?.map((props)=>(
              <tr>
            <td>{props.week}</td>
            <td>{props.punctuality}</td>
            <td>{props.Assignments}</td>
            <td>{props.classParticipation}</td>
            <td>{props.classAssessment}</td>
            <td>{props.personalDefense}</td>
            <td>{props.total}</td>
          </tr>
            ))
          }
        </table>
      </article>
      }
      </div>
      <div style={{marginTop: "30px", padding:"20px"}}>
      <h4>Key</h4>
        <p>
        WK: Week,
        PTY: Punctuality,
        ASS: Assignments,
        CLASS: Class Participation,
        CLASS A: Class Assessment,
        P D: Personal Development,
        AV. TOTAL: Average Total
        </p>
      </div>
    </main>
  )
}

export default UserProfile