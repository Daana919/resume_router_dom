import React from "react";

const Education = () => {
	return (
		<div className='education'>
			<div className='education__inner'>
				<div className='education__top' id='education'>
					<h3 className='education__title'>Education</h3>
				</div>
				<div className='education__bottom'>
					<div className='education__left'>
						<h3 className='education__left__title'>American University of Central Asia</h3>
						<p className='education__p'>2015 - 2019</p>
						<p> Bachelor dergee in International & Comparative politics</p>
					</div>
					<div className='education__right'>
						<h3 className='education__right__title'>Makers Bootcamp</h3>
						<p className='education__p'>November 14 - now</p>
						<p>Frond-end Developer Java script</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
