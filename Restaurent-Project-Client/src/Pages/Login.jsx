import React from 'react';

const Login = () => {

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
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
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />

              <input
                type="submit"
                className="mt-4 btn btn-neutral"
                value="submit"
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;