import React from "react";

const Hobbies = () => {
	return (
		<div className='hobbies'>
			<div className='hobbies__inner'>
				<h3 className='hobbies__title'>Hobbies</h3>

				<ul className='hobbies__list' id='hobbies'>
					<li className='hobbies__item'>
						<p className='hobbies__name'>Skiing</p>
						<img src='https://cdn-icons-png.flaticon.com/128/1412/1412921.png' alt='error' className='hobbies__img'></img>
					</li>
					<li className='hobbies__item'>
						<p className='hobbies__name'>GYM</p>
						<img src='https://cdn-icons-png.flaticon.com/128/1468/1468326.png' alt='error' className='hobbies__img'></img>
					</li>
					<li className='hobbies__item'>
						<p className='hobbies__name'>Psychology</p>
						<img src='https://cdn-icons-png.flaticon.com/128/1491/1491214.png' alt='error' className='hobbies__img'></img>
					</li>
					<li className='hobbies__item'>
						<p className='hobbies__name'>Reading Books</p>
						<img src='https://cdn-icons-png.flaticon.com/128/864/864685.png' alt='error' className='hobbies__img'></img>
					</li>
					<li className='hobbies__item'>
						<p className='hobbies__name'>Yoga</p>
						<img src='https://cdn-icons-png.flaticon.com/128/384/384156.png' alt='error' className='hobbies__img'></img>
					</li>
					<li className='hobbies__item'>
						<p className='hobbies__name'>Travelling</p>
						<img src='https://cdn-icons-png.flaticon.com/128/2060/2060521.png' alt='error' className='hobbies__img'></img>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Hobbies;
