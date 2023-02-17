const scrollNav = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });
};

const Navbar = ({ references }) => {
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              className="hover:cursor-pointer"
              onClick={() => scrollNav(references.findSeat)}
            >
              Find My Seat
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => scrollNav(references.schedule)}
            >
              Schedule
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => scrollNav(references.pictureGrid)}
            >
              Picture Grid
            </li>
          </ul>
        </div>
      </div>

      {/**CENTER */}
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Oy & Manisha</a>
      </div>

    </div>
  );
};

export default Navbar;

/**
 * <ol>
        <li
          className="hover:cursor-pointer"
          onClick={() => scrollNav(references.findSeat)}
        >
          Find My Seat
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => scrollNav(references.schedule)}
        >
          Schedule
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => scrollNav(references.pictureGrid)}
        >
          Picture Grid
        </li>
      </ol>
 */
