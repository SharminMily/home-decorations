/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut, updateUserProfile } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // modal open
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const NavOptions = (
    <div className=" lg:flex justify-between items-center gap-4 ">
      <li className="mx-1">
        <NavLink className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " text-base hover:text-gray-600"
          } to="/">
          <button className="text-black  w-full bg-gray-400 px-4 py-1 lg:text-base mb-2  rounded-md ">
            Home
          </button>
        </NavLink>
      </li>
      <li className="">
        <NavLink className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " text-base hover:text-gray-600"
          } to="/allServices">
          <button className="text-black w-full mb-2 bg-gray-400 px-1 py-1 lg:text-base  rounded-md">
            All Services
          </button>
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/singleService">
          <button className="text-black md:font-semibold mb-2  w-full bg-gray-400 px-2 py-1 lg:text-base rounded-md">
            SingleService
          </button>
        </NavLink>
      </li> */}
      {/*  */}
      <li className="flex mb-2 justify-start items-center">
        <CDropdown dark>
          <CDropdownToggle
            className="p-1 flex w-full justify-center items-center lg:text-base"
            href="#"
            color="secondary"
          >
            Dashboard
          </CDropdownToggle>
          <CDropdownMenu className="">
           
            <CDropdownItem
              className="text-white  bg-gray-800"
              href="/addServices"
            >
              Add-services
            </CDropdownItem>
            <CDropdownItem className="text-white  bg-gray-800" href="/booking">
              Booking{" "}
            </CDropdownItem>
            <CDropdownItem className="text-white  bg-gray-800" href="#">
              My-services
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </li>
    </div>
  );
  return (
    <div>
      <div className="bg-gray-800 m-0 p-0.5 hover:text-violet-400">
        <p className="text-center flex p-1 justify-center items-center text-xl font-extralight text-white hover:text-violet-400"><span className="font- hover:text-violet-400 pr-3">Home Decorations </span> <i className="hover:text-violet-400">+ 93275683571</i></p>       
      </div>

      <section
        className={`md:py-2.5  w-full mx-0 bg-[#c9c7caab] dark:text-gray-100 ${
          isOpen ? "lg:hidden" : ""
        }`}
      >
        <div className="flex justify-between items-center h-14 max-w-screen-xl mx-auto px-2">

          <div className="flex items-center justify-center ml-4 lg:w-12 lg:h-12 w-10 h-10 mt-1 rounded-full bg-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>

          <div className="lg:block hidden mt-3">
            <ul className="flex space-x-3">{NavOptions}</ul>
          </div>

          <div className=" flex justify-center gap-10">
            {/* <button className="px-8 py-3 rounded">Sign in</button> */}
            {user && (
              <div className="flex flex-col justify-center items-center">
                <img
                  className="md:w-12 md:h-12 w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <div className="w-24 bg-gray-900 text-white text-xs rounded p-0.5 mt-1 lg:block hidden  text-center">
                  {user.displayName}
                </div>
              </div>
            )}

            {user ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="md:block hidden py-1 lg:py-2 px-2 lg:px-3 md:m-2  text-sm  rounded bg-violet-400 text-gray-900 no-underline"
                >
                  Log Out
                </button>
                <button
                  onClick={handleLogOut}
                  className="md:hidden bg-violet-400 md:py-2 my-3 px-2 rounded-lg"
                >
                  logOut
                </button>
              </>
            ) : (
              <div className="mt-2.5">
                <button className="font-semibold text-white  py-1 px-3 mx-2">
                  <Link
                    to="/login"
                    className="py-2 px-3 text-sm font-bold uppercase rounded bg-violet-400 text-gray-900 no-underline"
                  >
                    login
                  </Link>
                </button>
              </div>
            )}
          </div>



          <div className="lg:hidden">
            <button className="p-2" onClick={toggleNavbar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

        </div>



        {/* Responsive menu */}
        <div className="">
          {isOpen && (
            <div className="lg:hidden ">
              <ul className="flex flex-col items-center space-y-3 mt-4">
                {NavOptions}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
