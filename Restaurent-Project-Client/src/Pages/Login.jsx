import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {

  const {signIn} = useContext(AuthContext)
  
  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[])
  
  const [disabled,setDisabled] = useState(true);
  
  const captchaRef = useRef(null);

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
  }
  
  const handleValidateCaptcha = () =>{
    const user_captcha_value = captchaRef.current.value;
    // console.log(value);
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false);
    }
    else{
      setDisabled(true);
      alert('Captcha Does Not Match. Please Try Again');
      
    }
    
    
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex-col hero-content ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className=" card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <label className="label">Captcha</label>
              <div>
                <LoadCanvasTemplate />
              </div>
              <input
                type="text"
                name="captcha"
                ref={captchaRef}
                className="input"
                placeholder="Enter Above text"
              />
              <button onClick={handleValidateCaptcha} className="btn btn-xs">Validate</button>

              <input
                type="submit"
                disabled={disabled}
                className="mt-4 btn btn-neutral"
                value="submit"
              />
            </fieldset>
          </form>
          <div>
            <p className="mb-4 text-center">New Here? <Link className="font-bold text-orange-600" to="/signUp">Create an account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;