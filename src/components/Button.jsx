import React from 'react'
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
	return (
		<Link to="book-a-room">
			<div className="booten">
				<button className="btn">Book A Room</button>
			</div>
		</Link>
	);
}
