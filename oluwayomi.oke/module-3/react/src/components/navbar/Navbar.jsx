import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
	AiOutlineFileAdd,
	AiOutlineHome,
	AiOutlineQuestionCircle,
} from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
	return (
		<div className="Navbar">
			<Link to='/' className="nav-logo">
				Contact Manager
      </Link>
      
			<div
				className={`nav-items ${isOpen && "open"}`}>
				<Link to="/">
					<span>
						<AiOutlineHome />
					</span>
					Home
        </Link>
        
				<Link to="/add">
					<span>
						<AiOutlineFileAdd />
					</span>
					Add
        </Link>
        
				<Link to="/about">
					<span>
						<AiOutlineQuestionCircle />
					</span>
					About
				</Link>
			</div>
			
			<div
				className={`nav-toggle ${isOpen && "open"}`}
				onClick={() => setIsOpen(!isOpen)}>
				<div className="bar"></div>
			</div>
		</div>
	);
};

export default Navbar;
