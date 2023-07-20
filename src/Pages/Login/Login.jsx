import React from 'react';
import image from "../../images/logo.jpeg"
import sideImage from "../../images/forLogin.jpg"
// import axios from "axios"
import axios from "../../api/axios"
import "./Login.css"
import { useNavigate, useLocation } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { addId } from "../../Contexts/IdReducer";
import { useDispatch } from "react-redux";
const LOGIN_URL = "/users/login"

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
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
      const res = await axios.post(LOGIN_URL, { email, password});

      // console.log(email, password)
      dispatch(addId({name: res.data.data.name, stack: res.data.data.stack, role: res.data.data.role, image: res.data.data.image}));
      // console.log(res.data.data.name, res.data.data.stack);
      reset();
      Toast.fire({
        icon: 'success',
        title: 'You are now Logged in'
      })
      navigate(from, {replace: true})
    }catch(error){
      if(error.response){
        Toast.fire({
          icon:'fail',
          title: "Login Failed"
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
          {/* <p>{errors && "some error"}</p> */}
          <input className="login-input" placeholder="Password" type="password" {...register("password")} />
          <button className="login-signup-button" type="submit">Log In</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login