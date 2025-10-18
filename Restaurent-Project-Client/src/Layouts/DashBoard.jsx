
import React from 'react';
import { FaAd, FaBookmark, FaCalendar, FaCartPlus, FaHome } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { MdMessage, MdOutlinePayment } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className="flex">
      <div classname="w-64 min-h-screen pt-6 bg-amber-500 lg:pt-10">
        <a className="block font-bold text-center btn btn-ghost">
          <span className="text-2xl text-black ">BISTRO BOSS</span>
          <br />
          <span className="text-xl text-gray-700 ">RESTAURANT</span>
        </a>
        <ul className="mt-6 space-y-5 uppercase menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <MdOutlinePayment />
              payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartPlus></FaCartPlus>
              My cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaBookmark></FaBookmark>
              My Booking
            </NavLink>
          </li>
          {/* shared links */}
          <div className="space-y-3 border-t-2">
            <li className="mt-5">
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <IoMdMenu />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <FaShop />
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <MdMessage />
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex-1">
        <div className="max-w-4xl mx-auto border">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;