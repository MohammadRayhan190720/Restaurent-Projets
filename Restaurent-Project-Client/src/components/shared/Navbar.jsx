import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext);

  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      console.log('SignOut Successfully');
    })
    .catch(error =>{
      console.log(error)
    })
  }

  const menu = (
    <>
      <NavLink className="mr-5" to="/">
        Home
      </NavLink>
      <NavLink className="mr-5" to="/">
        Contact us
      </NavLink>
      <NavLink className="mr-5" to="/">
        DashBoard
      </NavLink>
      <NavLink className="mr-5" to="/menu">
        Our Menu
      </NavLink>
      <NavLink className="mr-5" to="/secret">
        Private Route
      </NavLink>
      <NavLink className="mr-5" to="/orderFood/salads">
        Order Food
      </NavLink>
      {user ? (
        <>
          <button className="mr-5" onClick={handleSignOut}>
            LogOut
          </button>
        </>
      ) : (
        <>
          <NavLink className="mr-5" to="/login">
            Login
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="fixed z-10 mx-auto text-white bg-black opacity-50 navbar max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            {menu}
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">Bristro Boss Resturant</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{menu}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;