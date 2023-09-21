import React, { useEffect, useState, useContext } from 'react';
import "./UserProfile.css";
import {useParams} from "react-router-dom"
import axios from "axios";
import {AuthContext} from '../../Contexts/AuthProvider';
import Swal from "sweetalert2";
import { useSelector } from 'react-redux';

const Detail = () => {
  const {saveUser} = useContext(AuthContext);
    const {id} = useParams();
    const [user, setUser] = useState();
    const [ratings, setRatings] = useState();
    const profile = useSelector((state) => state.Id.Id);

    const getUser =async()=>{
        try{
          const res = await axios.get(`https://sotw-app.onrender.com/users/oneUser/${id}`)
          setUser(res.data.data);
          // console.log(res.data.data)
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

      const deleteRating=async( week)=>{
        try{
          let studentId = user._id;
          // console.log(user._id, week)
          const Toast = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          if(Toast.isConfirmed){
            await axios.delete(`https://sotw-app.onrender.com/rating/delete/${studentId}/${week}`)
            Swal.fire(
                    'Deleted!',
                    'Rating has been removed.',
                    'success'
            )
            getUser();
          }
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
            <p className="user-name"> {user.name}</p>
            <p className='user-talk'> {user.email}</p>
            {
              user.role === "student"? <p className='user-talk'>{user.stack}</p>: <p className='user-talk'>{user.role}</p>
            }
          </div>
        </div>
      </article>: null
      }
      {
        user && user?.stack === "Tutor"? null: ratings? <article className='user-assessment'>
        <p>Your Assessment History</p>
        <table style={{width: "100%"}}>
          <thead>
          <tr className="user-table-head">
            <th>WK </th>
            <th>PTY</th>
            <th>ASS</th>
            <th>CLASS P</th>
            <th>CLASS A</th>
            <th>P D</th>
            <th>AV. TOTAL 100%</th>
            <th></th>
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
            {/* <td>{(Math.round(props.total * 10))/10}</td> */}
            <td>{(Math.round(((props?.total /20) * 100)* 10))/10}%</td>
            {(profile?.role === "tutor" || profile?.role === "admin")? <td><button className="assessment-submit" onClick={()=> deleteRating(props.week)}>Delete</button></td>: null}
          </tr>
            ))
          }
          </tbody>
        </table>
      </article>: null
      }
      </div>
     {
      (user?.role === "student") || (user?.role === "alumni")?  <div style={{marginTop: "30px", padding:"20px"}}>
      <h4>Key</h4>
        <p>
        WK: Week,
        PTY: Punctuality,
        ASS: Assignments,
        CLASS: Class Participation,
        CLASS A: Class Assessment,
        P D: Personal Defense,
        AV. TOTAL: Average Total
        </p>
      </div>: null
     }
    </main>
  )
}

export default Detail