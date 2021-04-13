import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<div>
			<nav className="navbar">
				<Link to="/" className="navbar-logo">
					Ferofly. <i class="fab fa-fly" />
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
							ABOUT
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/rooms" className="nav-links" onClick={closeMobileMenu}>
							ROOMS
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/services" className="nav-links" onClick={closeMobileMenu}>
							SERVICES
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
							GALLERY
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/see-do" className="nav-links" onClick={closeMobileMenu}>
							SEE&DO
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/contact-us"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							CONTACT
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/book-a-room"
							className="nav-links-mobile"
							onClick={closeMobileMenu}
						>
							Book A Room
						</Link>
					</li>
				</ul>
				<Button />
			</nav>
		</div>
	);
}

export default Navbar;
