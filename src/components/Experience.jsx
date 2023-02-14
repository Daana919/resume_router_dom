import React from "react";

const Experience = () => {
	return (
		<div className='skills'>
			<div className='skills__inner'>
				<h3 className='skills__title' id='experience'>
					Experience skills
				</h3>
				<p className='skills__subtitle'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum asperiores, quasnesciunt animi totam sapiente c aut doloribus?placeat ipsa cumque cupiditate quia ab asperiores. Doloremque, est excepturi quo sequi asperiores aliquam.</p>
				<div className='skills__bottom'>
					<div className='skills__bottom__html'>
						<div className='skills__bottom__text'>
							<p>HTML</p>
							<p>80%</p>
						</div>
						<div className='skills__bottom__line'>
							<div className='skills__bottom__line-small-1'></div>
						</div>
					</div>
					<div className='skills__bottom__css'>
						<div className='skills__bottom__text'>
							<p>CSS</p>
							<p>80%</p>
						</div>
						<div className='skills__bottom__line'>
							<div className='skills__bottom__line-small-2'></div>
						</div>
					</div>
					<div className='skills__bottom__js'>
						<div className='skills__bottom__text'>
							<p>JS</p>
							<p>0%</p>
						</div>
						<div className='skills__bottom__line'>
							<div className='skills__bottom__line-small-3'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
