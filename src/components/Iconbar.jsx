import React from "react";
import "./Iconbar.css";
import {ReactComponent as Chat} from './chat.svg'

function Iconbar() {
	return (
		<div className="icon-bar-container">
			<div className="icon-bar">
				<div className="icon">
					<i class="fab fa-tripadvisor" />
				</div>
				<div className="icon">
					<i class="fab fa-facebook-f" />
				</div>
				<div className="icon">
					<i class="fab fa-instagram" />
				</div>
			</div>
		</div>
	);
}

export default Iconbar;
