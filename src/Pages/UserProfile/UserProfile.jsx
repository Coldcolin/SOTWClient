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
      console.log(res.data.data)
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
            <p className="user-name">Name: {profile.name}</p>
            <p className='user-talk'>Email: {profile.email}</p>
            {/* <p className='user-talk'>Phone: {profile.phone}</p> */}
            <p className='user-talk'>Stack: {profile.stack}</p>
          </div>
        </div>
      </article>
      {
        profile.stack === "Tutor"? null:<article className='user-assessment'>
        <p>Your Assessment History</p>
        <table style={{width: "100%"}}>
          <tr className="user-table-head">
            <th>WEEK </th>
            <th>PUNCTUALITY</th>
            <th>ASSIGNMENTS</th>
            <th>CLASS PARTICIPATION</th>
            <th>CLASS ASSESSMENT</th>
            <th>PERSONAL DEFENCE</th>
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
    </main>
  )
}

export default UserProfile