import React from 'react'
import './Floatingbutton.css'
import { ReactComponent as Chat } from "./chat.svg";

function Floatingbutton() {
    return (
			<div className="action">
				<button className="action">
					<Chat/>
				</button>
			</div>
		);
}

export default Floatingbutton
