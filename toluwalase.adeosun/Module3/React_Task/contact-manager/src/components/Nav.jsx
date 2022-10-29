import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { AiOutlineFileAdd, AiOutlineQuestionCircle } from 'react-icons/ai';

const Nav = () => {
  return (
    <>
      <nav className="w-1/3 ">
        <ul className="w-full flex justify-between p-3 space-x-4">
          <NavLink className="flex items-center" to="/">
            <BiHome className="text-[white] pr-[2px]" />
            <li>Home</li>
          </NavLink>
          <NavLink className="flex items-center" to="/add">
            <AiOutlineFileAdd className="text-[white] pr-[2px]" />
            <li>Add</li>
          </NavLink>
          <NavLink className="flex items-center" to="/about">
            <AiOutlineQuestionCircle className="text-[white] pr-[2px]" />
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
