import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex-col hero-content ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">SignUp Now!!!</h1>
        </div>
        <div className="max-w-lg shadow-2xl bg-base-100">
          <form className=" card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
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
              <input
                type="submit"
                className="mt-4 btn btn-secondary"
                value="SignUp"
              />
            </fieldset>
          </form>
          <div>
            <p className="mb-4 text-center">Already have an account? <Link className="font-bold text-orange-600" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;