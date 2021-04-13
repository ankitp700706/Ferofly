import React from "react";
import "./Landingpage.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

function LandingPage() {
	const classes = useStyles();
	const date = new Date()

	return (
		<div className="home-container">
			<div className="home-text">Forefly</div>
			<div className="home-subText">&ndash;Magnify your Journey&ndash;</div>
			<div className="image-container">
				<div className="image-div" />
			</div>
			<div className="content">
				<div className='mui-tf'>
					<TextField
						id="date"
						label="Check In"
						type="date"
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="date"
						label="Check Out"
						type="date"
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
				<div className='html-tf'> 
					<div className="tf-content">
						<label>Adult</label>
						<input
							type="number"
							id="quantity"
							name="quantity"
							min="1"
							max="10"
						></input>
					</div>
					<div className="tf-content">
						<label>Child</label>
						<input
							type="number"
							id="quantity"
							name="quantity"
							min="0"
							max="10"
						></input>
					</div>
					<div className='btn2-conatiner'>
						<button className="btn2">Search</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
