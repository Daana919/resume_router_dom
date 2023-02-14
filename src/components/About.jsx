import React from "react";

const About = () => {
	return (
		<div>
			<div className='header'>
				<div className='header__inner'>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyg6D46rycYNRiLV7xW_1Dt_pOBie445Pgjg&usqp=CAU' alt='eror' class='header__photo'></img>
					<h4 className='header__iam' id='about'>
						Hello! I am Daana. Web Developer & Frond-end Expert
					</h4>
					<p className='header__location__text'>Located in Bishkek</p>
					<button className='header__button'>Download CV</button>
				</div>
			</div>
		</div>
	);
};

export default About;
