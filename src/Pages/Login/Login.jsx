import React, {useState, useEffect} from 'react';
import image from "../../images/logo.jpeg"
import sideImage from "../../images/forLogin.jpg"
import axios from "axios"
import "./Login.css"
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { addId } from "../../Contexts/IdReducer";
import { useDispatch } from "react-redux"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schemaModel = yup.object().shape({
    email: yup.string().email().required("Please input your email"),
    password: yup.string().required("Please input your password")
  });

  const {register, reset, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver( schemaModel)});

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

  const logIn = handleSubmit( async (data) =>{
    try{
      const {email, password}= data;
      const res = await axios.post("http://localhost:4400/users/login", { email, password});

      console.log(res.data.data);
      // console.log(email, password)

      localStorage.setItem("SOTWUser", JSON.stringify(res.data.data));
      dispatch(addId(res.data.data))
      reset();
      Toast.fire({
        icon: 'success',
        title: 'You are now Logged in'
      })
      navigate("/user")
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


  
  return (
    <div className="login-main">
      <div className="login-left">
        <div className="left-image">
          <img src={sideImage} alt="" />
        </div>
      </div>
      <div className="login-right">
        <div className="login-image-div">
          <img src={image} alt="img" className="login-right-logo"/>
        </div>
        <div className="login-right-form-holder">
        <form className="login-right-form" onSubmit={logIn}>
          <div className="login-avatar-div">
            Login
          </div>
          <input className="login-input" placeholder="Email" {...register("email")}/>
          <input className="login-input" placeholder="Password" type="password" {...register("password")} />
          <button className="login-signup-button" type="submit">Log In</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login