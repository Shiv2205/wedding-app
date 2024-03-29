import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import scrollNav from '@/util/scrollNav';

const handleClick = (ref) => {
  const elem = document.activeElement;
  if (elem) {
    elem?.blur();
  }
  scrollNav(ref, 100);
};

function Navbar({ references }) {
  const [wishes, setWishes] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/wishes') {
      setWishes(true);
    }
  });

  return (
    <div className="navbar bg-yellow-500 sticky top-0 z-20 transform translate-z-28"> 
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
          {!wishes ? (
            <ul
              tabIndex={0}
              className="menu menu-normal dropdown-content mt-3 ml-5 shadow bg-base-200 w-52 float-right"
            >
              <li
                className="p-3 hover:cursor-pointer hover:bg-yellow-400 hover:text-black"
                onClick={() => handleClick(references.findSeat)}
              >
                Find My Seat
              </li>
              <li
                className="p-3 hover-bordered hover:cursor-pointer hover:bg-yellow-400 hover:text-black"
                onClick={() => handleClick(references.schedule)}
              >
                Schedule
              </li>
              <li
                className="p-3 hover-bordered hover:cursor-pointer hover:bg-yellow-400 hover:text-black"
                onClick={() => handleClick(references.pictureGrid)}
              >
                Gallery
              </li>
              <li
                className="p-3 hover:cursor-pointer hover:bg-yellow-400 hover:text-black"
                onClick={() => router.push('/wishes')}
              >
                Make A Wish
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="menu menu-normal dropdown-content mt-3 ml-5 shadow bg-base-200 w-52 float-right"
            >
              <li
                className="p-3 hover:cursor-pointer hover:bg-yellow-400 hover:text-black"
                onClick={() => router.push('/')}
              >
                Home Page
              </li>
            </ul>
          )}
        </div>
      </div>

      {/** CENTER */}
      <div className="navbar-end">
        <Link className="btn btn-ghost normal-case text-xl text-white" href="/">
          Oy & Manisha
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
