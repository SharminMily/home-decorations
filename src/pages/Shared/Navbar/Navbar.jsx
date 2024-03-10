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
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // };

  const NavOptions = (
    <>
      <li className="mx-1">
        <NavLink className="" to="/">
          <button className="text-black md:font-semibold hover:underline w-full bg-gray-400 px-1 py-1 lg:text-base mx-1 rounded-md ">
            Home
          </button>
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/allServices">
          <button className="text-black md:font-semibold hover:underline w-full bg-gray-400 px-1 py-1 lg:text-base  rounded-md">
            All Services
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/singleService">
          <button className="text-black md:font-semibold hover:underline  w-full bg-gray-400 px-2 py-1 lg:text-base rounded-md">
            SingleService
          </button>
        </NavLink>
      </li>
      {/*  */}
      <CDropdown dark>
        <CDropdownToggle
          className="p-1 flex w-full justify-center items-center lg:text-base"
          href="#"
          color="secondary"
        >
          Dashboard
        </CDropdownToggle>
        <CDropdownMenu className="">
          <CDropdownItem className="text-white  bg-gray-800" href="#">
            My-services
          </CDropdownItem>
          <CDropdownItem className="text-white  bg-gray-800" href="#">
            Add-services
          </CDropdownItem>
          <CDropdownItem className="text-white  bg-gray-800" href="#">
            My-schedules{" "}
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  );
  return (
    <div>
      <header className=" md:pb-6 md:pt-4 pb-8 pt-2 bg-gray-800 text-gray-100">
        <div className="container flex justify-between h-12 mx-auto">
          <p
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex-col items-center p-"
          >
            <div className="flex items-center md:ml-10 justify-center w-10 h-10 rounded-full bg-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <h2 className="text-violet-400 md:block hidden text-start lg:text-xl lg:font-semibold md:text-xs no-underline ">
              HomeDecorations
            </h2>
          </p>
          <ul className="items-center space-x-2 md:space-x-3 grid md:grid-cols-4 grid-cols-2 md:gap-0 gap-2 mr-4 md:mt-2">
            {NavOptions}
          </ul>

                  

          {user && (
              <div className="">
                <img
                  className="md:w-12 md:h-12 w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <div className="w-32 bg-gray-900 text-white text-xs rounded mr-2 absolute  md:block hidden  ">
                  {user.displayName}                   
                   
                </div>       
                
               <button
              onClick={handleLogOut}
              className="md:p-2 p-0.5 mt-1 text-sm rounded bg-violet-400 md:hidden block text-gray-900 no-underline"
            >
              LogOut
            </button>
              </div>
            )} 


             {user ? (
             <>        
            <button
              onClick={handleLogOut}
              className=" py-1 lg:px-3 ml-4 md:block hidden text-sm  rounded bg-violet-400 text-gray-900 no-underline"
            >
              Log Out
            </button>
      
        </>
      ) : (
       
         <div className="mt-2.5">
           <button className="font-semibold text-white  py-1 px-3 mx-2"><Link to="/login" className="py-2 px-3 text-sm font-bold uppercase rounded bg-violet-400 text-gray-900 no-underline" >login</Link>
          </button>   
         </div>
         )  }
   


              
  </div>

              
      </header>
    </div>
  );
};

export default Navbar;
