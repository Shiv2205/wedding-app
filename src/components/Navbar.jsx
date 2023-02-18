import scrollNav from "@/util/scrollNav";
import Link from "next/link";

const Navbar = ({ references }) => {
  return (
    <div className="navbar bg-yellow-500 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown dropdown-right">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-normal dropdown-content mt-3 ml-5 shadow bg-base-200 w-52 float-right"
          >
            <li
              className="pb-3 pl-3 pt-2 hover:cursor-pointer hover:bg-yellow-400 hover:text-black"
              onClick={() => scrollNav(references.findSeat)}
            >
              Find My Seat
            </li>
            <li
              className="pb-3 pl-3 hover-bordered hover:cursor-pointer hover:bg-yellow-400 hover:text-black"
              onClick={() => scrollNav(references.schedule)}
            >
              Schedule
            </li>
            <li
              className="pb-3 pl-3 hover-bordered hover:cursor-pointer hover:bg-yellow-400 hover:text-black"
              onClick={() => scrollNav(references.pictureGrid)}
            >
              Picture Grid
            </li>
          </ul>
        </div>
      </div>

      {/**CENTER */}
      <div className="navbar-end">
        <Link className="btn btn-ghost normal-case text-xl" href="/">Oy & Manisha</Link>
      </div>

    </div>
  );
};

export default Navbar;