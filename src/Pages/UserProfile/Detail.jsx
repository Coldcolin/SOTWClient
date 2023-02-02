import React, { useEffect, useState } from 'react';
import "./UserProfile.css";
import {useParams} from "react-router-dom"
import axios from "axios";

const Detail = () => {
    const {id} = useParams();
    const [user, setUser] = useState();
    const [ratings, setRatings] = useState();

    const getUser =async()=>{
        try{
          const res = await axios.get(`https://sotw-app.onrender.com/users/oneUser/${id}`)
          setUser(res.data.data);
          // console.log(res.data.data.image)
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

      const getRatings =async()=>{
        try{
          const res = await axios.get(`https://sotw-app.onrender.com/rating/get/${id}`)
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
        getUser()
      },[])
      useEffect(()=>{
        getRatings()
      },[user])
  return (
    <main className="user-main">
    <div className="text">User Profile</div>
      <div className="user-holder">
      {
        user? <article className="user-info">
        <div className='user-info-div'>
          <img className='user-image' src={user.image} alt="" />
          <div className="user-detail">
            <p className="user-name">Name: {user.name}</p>
            <p className='user-talk'>Email: {user.email}</p>
            <p className='user-talk'>Stack: {user.stack}</p>
          </div>
        </div>
      </article>: null
      }
      {
        user && user.stack === "Tutor"? null: ratings? <article className='user-assessment'>
        <p>Your Assessment History</p>
        <table style={{width: "100%"}}>
          <thead>
          <tr className="user-table-head">
            <th>WEEK </th>
            <th>PUNCTUALITY</th>
            <th>ASSIGNMENTS</th>
            <th>CLASS PARTICIPATION</th>
            <th>CLASS ASSESSMENT</th>
            <th>PERSONAL DEFENCE</th>
            <th>AV. TOTAL 100%</th>
          </tr>
          </thead>
          <tbody>
          {
            ratings?.map((props)=>(
              <tr key={props._id}>
            <td>{props.week}</td>
            <td>{props.punctuality}</td>
            <td>{props.Assignments}</td>
            <td>{props.classParticipation}</td>
            <td>{props.classAssessment}</td>
            <td>{props.personalDefense}</td>
            <td>{(Math.round(props.total * 10))/10}</td>
          </tr>
            ))
          }
          </tbody>
        </table>
      </article>: null
      }
      </div>
    </main>
  )
}

export default Detail