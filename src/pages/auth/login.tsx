import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import svg from '../../assets/login-img.svg';
import logo from '../../assets/logo.svg';
import Input from "../../Components/Input/Input";
import './login.scss';

const Login = () => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(true);
  const [passswordIsVissible, setPassswordIsVissible] = useState(true);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const userDetails = {email, password}

    await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      }
    });

    if(password.length < 8){
      alert('Password must be greater than 7')
    } else if (email.length < 5 || email.length === 0) {
      alert("Plrase Input a valid email");
    }

    if(password.length > 8 && email.length > 7){
      localStorage.setItem("user-info", JSON.stringify(userDetails));
      navigate("/dashboard");
    }
  };

  const toggleShow = (event: any) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    setPassswordIsVissible(!passswordIsVissible);
  }

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate("/dashboard");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="login__container">
        <div className="login__container__left">
          <img src={logo} alt="Logo"  className="logo" />
          <img src={svg} alt="login Illustration" className="illustration" />
        </div>

        <div className="login__container__right">
          
          <h1 className="login__container__right__header">Welcome!</h1>
          <p className="login__container__right__text">Enter details to login.</p>
          <form onSubmit={handleSubmit} className="login__container__right__form" action="">

            <Input type="email" placeholder="email" name="email" id="email" onChange={(e:any) => setEmail(e.target.value)}/>

            <Input 
              type={passswordIsVissible ? 'password' : "text"} 
              placeholder="passsword" 
              name="password" id="password" 
              onChange={(e:any) => setPassword(e.target.value)} 
            /><span><button onClick={toggleShow} >{showPassword ? 'show' : 'hide'}</button></span>

            <a href="/">Forgot password?</a>

            <button 
              className="login__container__right__form__button" 
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
    </div>
  );
};

export default Login;