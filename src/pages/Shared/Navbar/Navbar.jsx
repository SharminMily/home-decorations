import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const NavOptions = <>
        <li>
            <NavLink to='/'>
                <button className="text-violet-300 md:font-semibold hover:underline">Home</button>
            </NavLink>
        </li>
        <li>
            <NavLink to='/allServices'>
                <button className="text-violet-300 md:font-semibold hover:underline">All Services</button>
            </NavLink>
        </li>
        <li>
            <NavLink to='/singleService'>
                <button className="text-violet-300 md:font-semibold hover:underline">Single Service</button>
            </NavLink>
        </li>

    </>
    return (
        <div>
            <header className="p-4 bg-gray-800 text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex-col items-center p-2">

                        <div className="flex items-center md:ml-10 justify-center w-10 h-10 rounded-full bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900">
                                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                            </svg>                            
                        </div>
                        <h2 className="text-violet-400 md:block hidden text-start font-semibold">Home Decorations</h2>
                    </a>
                    <ul className="items-center space-x-2 md:space-x-3 flex">
                        {NavOptions}
                    </ul>
                    <div className="items-center flex justify-center ">

                        <Link to='/register'>
                            <button className="self-center md:px-8 px-2 md:py-3 py-2 font-semibold rounded bg-violet-400 text-gray-900">SingIn</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;