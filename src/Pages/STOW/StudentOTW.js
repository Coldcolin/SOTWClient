import React, { useEffect, useState, useMemo } from 'react';
import "./StudentOTW.css";
import {FaGraduationCap} from "react-icons/fa";
import {FaChalkboardTeacher} from "react-icons/fa"
import {HiOutlineUserGroup} from "react-icons/hi"
import giffy from "../../images/loader.gif";
import {NavLink} from "react-router-dom";
import Loader from "./Loader.jsx"
import axios from "../../api/axios";
const SOTWFE_URL = "/SOW/student"
const ALLSOTWFE_URL = "/SOW/all"
const SOTWBE_URL = "/BSOW/student"
const ALLSOTWBE_URL = "/BSOW/all"
const ALL_USERS = "/users/allusers"


const StudentOTW = () => {
  const [SOTWFE, setSOTWFE] = useState([]);
  const [allSOTWFE, setAllSOTWFE] = useState([]);
    const [SOTWBE, setSOTWBE] = useState([]);
    const [allSOTWBE, setAllSOTWBE] = useState([]);
    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(false)

const getUsers =async()=>{
    try{
      setLoading(true)
    // const res = await axios.get("http://localhost:4400/users/allusers")
    const res = await axios.get(SOTWFE_URL)
    const rest = await axios.get(SOTWBE_URL);
    const allBest = await axios.get(ALLSOTWBE_URL);
    const allFest = await axios.get(ALLSOTWFE_URL);
    const resAll = await axios.get(ALL_USERS);

    setAllUsers(resAll.data.data);
    setSOTWFE(res.data.data.student);
    setSOTWBE(rest.data.data.student);
    setAllSOTWFE(allFest.data.data);
    setAllSOTWBE(allBest.data.data);
    setLoading(false)
    // console.log(allBest.data.data);
    // console.log(allFest.data.data);
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

    const getStats = ()=>{
      return allUsers.filter((i)=> i.stack !== "Tutor");
    }
    
    const memoizedVal = useMemo(() => getStats(), [allUsers]);

    useEffect(()=>{
    getUsers();
    }, [])
  return (
    <div className="sotw-main">
      <main className="sotw-container">
      <h2>Dashboard</h2>
        <section className="sotw-top">
          <NavLink to="/users" className="sotw-navs">
            {loading ? <div className="sotw-boxes"><img src={giffy} alt="giffy"/></div> :<div className="sotw-boxes">
              <div className="sotw-circle-1"><HiOutlineUserGroup/></div>
              <div className="sotw-info">
                <div>{allUsers.length}</div>
                <span>All Users</span>
              </div>
            </div>}
          </NavLink>
          <NavLink to="students" className="sotw-navs">
            {loading ? <div className="sotw-boxes"><img src={giffy} alt="giffy"/></div>:<div className="sotw-boxes">
              <div className="sotw-circle-2"><FaGraduationCap/></div>
              <div className="sotw-info">
                <div>{memoizedVal.length}</div>
                <span>Students</span>
              </div>
            </div>}
          </NavLink>
          <NavLink to="tutors" className="sotw-navs">
            {loading ? <div className="sotw-boxes"><img src={giffy} alt="giffy"/></div>:<div className="sotw-boxes">
              <div className="sotw-circle-3"><FaChalkboardTeacher/></div>
              <div className="sotw-info">
                <div>{allUsers.length - memoizedVal.length}</div>
                <span>Instructors</span>
              </div>
            </div>}
          </NavLink>
        </section>
        <section className="sotw-middle">
              <div className="image-holders">
              {
                loading? <div className="sotw-sotw"><Loader/></div>: <div className="sotw-sotw">
                <img className="sotw-image" src={SOTWFE.image} alt="img"/>
                <div className= "sotw-image-info">
                <p className="sotw-image-info-h4">STUDENT OF THE WEEK</p>
                <p className="sotw-image-info-h3">{SOTWFE.name}</p>
                <p className="sotw-image-info-p">Frontend Developer</p>
                </div>
              </div>
              }
          
              {
                loading? <div className="sotw-sotw"><Loader/></div> : <div className="sotw-sotw">
                <img className="sotw-image" src={SOTWBE.image} alt="img"/>
                <div className= "sotw-image-info">
                <p className="sotw-image-info-h4">STUDENT OF THE WEEK</p>
                <p className="sotw-image-info-h3">{SOTWBE.name}</p>
                <p className="sotw-image-info-p">Backend Developer</p>
                </div>
              </div>
              }
              </div>
          <div className="image-holders">
          <div className="sotw-history">
            <p>Student of the week History Front-End</p>
            <table style={{width: "100%"}}>
              <thead>
              <tr>
                <th>WEEK</th>
                <th>NAME</th>
                <th>AVERAGE RATING</th>
                <th>CURRENT RATING</th>
              </tr>
              </thead>
              <tbody>
              {
                allSOTWFE?.map((props)=>(
                  <tr key={props._id}>
                    <td>{props.week}</td>
                    <td>{props.student.name}</td>
                    <td>{props.student.overallRating}</td>
                    <td>{props.student.weeklyRating}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          <div className="sotw-history">
            <p>Student of the week History Back-End</p>
            <table style={{width: "100%"}}>
              <tr>
                <th>WEEK</th>
                <th>NAME</th>
                <th>AVERAGE RATING</th>
                <th>CURRENT RATING</th>
              </tr>
              {
                allSOTWBE?.map((props)=>(
                  <tr key={props._id}>
                    <td>{props.week}</td>
                    <td>{props.student.name}</td>
                    <td>{props.student.overallRating}</td>
                    <td>{props.student.weeklyRating}</td>
                  </tr>
                ))
              }
            </table>
          </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  )
}

export default StudentOTW