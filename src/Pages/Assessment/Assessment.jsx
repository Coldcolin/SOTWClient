import React, { useEffect, useState } from 'react'
import "./Assessment.css";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

const Assessment = () => {
  const [users, setUsers] = useState([]);

  const schemaModel = yup.object().shape({
    punctuality: yup.number().required("Please add your punctuality"),
    Assignments: yup.number().required("Please add your Assignments"),
    personalDefense: yup.number().required("Please input your personalDefense"),
    classParticipation: yup.number().required("Please input your classParticipation"),
    classAssessment: yup.number().required("Please input your classAssessment"),
    week: yup.number().required("Please input your week"),
  });

  const {register, reset, handleSubmit, watch, formState: {errors}} = useForm({ resolver: yupResolver( schemaModel)});

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 3000,
    showConfirmButton: false,
    didOpen: (toast) =>{
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const addAssessment = handleSubmit( async (data, id) =>{
    try{
      const {Assignments, personalDefense, classParticipation, punctuality, classAssessment, week}= data;

      // const formData = new FormData();
      // formData.append("punctuality", punctuality);
      // formData.append("Assignments", Assignments);
      // formData.append("personalDefense", personalDefense);
      // formData.append("classParticipation", classParticipation);
      // formData.append("classAssessment", classAssessment);
      // formData.append("week", week);
      
      // await axios.post(`http://localhost:4400/rating/add/${id}`,data, config);
      console.log( Assignments, personalDefense, classParticipation, punctuality, classAssessment, week, id);
      reset();
      Toast.fire({
        icon: 'success',
        title: 'Assessment Added'
      })
    }catch(error){
      if(error.response){
        Toast.fire({
          icon:'fail',
          title: error.response.data.message
        })
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      }else {
        console.log("Error", error.message)
      }
    }
  })

  const getUsers =async()=>{
    try{
      const res = await axios.get("http://localhost:4400/users/allusers")
      // console.log(res.data.data)
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
    <div className="assessment-content">
    <div className="assessment-title">Student Assessment</div>
      <div className="assessment-top">
        {/* <div className="assessment-filter">All</div>
        <div className="assessment-search">Search</div> */}
      </div>
      <div className="a-table">
      <table className="assessment-table-holder">
          <tr className="assessment-table">
            <th className="assessment-table-title">IMAGE</th>
            <th className="assessment-table-title">FULL NAME</th>
            <th className="assessment-table-title">PUNCTUALITY</th>
            <th className="assessment-table-title">ASSIGNMENTS</th>
            <th className="assessment-table-title">CLASS ASSESSMENT</th>
            <th className="assessment-table-title">CLASS PARTICIPATION</th>
            <th className="assessment-table-title">PERSONAL DEFENSE</th>
            <th className="assessment-table-title"> WEEK</th>
            <th className="assessment-table-title"></th>
          </tr>
          {
            users.map((props)=>(
              <tr className="assessment-user-info" key={props._id}>
                <td><img src={props.image} alt="imae" className="assessment-image"/></td>
                <td><div className="assessment-item">{props.name}</div></td>
                <td><input type="number" className="assessment-input" placeholder="punctuality" {...register("punctuality")}/></td>
                <td><input type="number" className="assessment-input" placeholder="assignment" {...register("Assignment")}/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Assessment" {...register("classAssessment")}/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Participation" {...register("classParticipation")}/></td>
                <td><input type="number" className="assessment-input" placeholder="Personal Defense" {...register("personalDefense")}/></td>
                <td><input type="number" className="assessment-input" placeholder="week" {...register("week")}/></td>
                <td><div className="assessment-submit" onClick={()=> addAssessment(props._id)}>Submit</div></td>
              </tr>
            ))
          }
        </table>
        </div>
    </div>
  )
}

export default Assessment