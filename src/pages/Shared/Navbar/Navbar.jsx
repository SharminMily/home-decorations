import { Link, NavLink } from "react-router-dom";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
const Navbar = () => {
  const NavOptions = (
    <>
      <li className="mx-0 flex justify-center">
        <NavLink to="/">
          <button className="text-black md:font-semibold hover:underline bg-gray-400 px-2 py-1 text-base rounded-md ">
            Home
          </button>
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/allServices">
          <button className="text-black md:font-semibold hover:underline bg-gray-400 px-2 py-1 text-base rounded-md">
            All Services
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/singleService">
          <button className="text-black md:font-semibold hover:underline bg-gray-400 px-2 py-1 text-base rounded-md">
            SingleService
          </button>
        </NavLink>
      </li>
      {/*  */}
      <CDropdown dark>
        <CDropdownToggle
          className="p-1 flex justify-center items-center"
          href="#"
          color="secondary"
        >
          Dashboard
        </CDropdownToggle>
        <CDropdownMenu className="">
          <CDropdownItem className="text-white  bg-gray-800" href="#">Action</CDropdownItem>
          <CDropdownItem className="text-white  bg-gray-800" href="#">Another action</CDropdownItem>
          <CDropdownItem className="text-white  bg-gray-800" href="#">Something</CDropdownItem>
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
          <ul className="items-center space-x-2 md:space-x-3 grid md:grid-cols-4 grid-cols-2 md:gap-0 gap-2 mr-4 md:mt-2" >
            {NavOptions}
          </ul>
          <div className="items-center flex justify-center ">
            <Link to="/register">
              <button className="self-center md:px-8 px-2 md:py-3 py-2 font-semibold rounded bg-violet-400 text-gray-900">
                SingIn
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
