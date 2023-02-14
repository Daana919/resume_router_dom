import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<div className='navbar'>
				<ul className='navbar__info'>
					<li>
						<a className='navbar__info__items'>
							<NavLink to='/'>About</NavLink>
						</a>
					</li>
					<li>
						<a className='navbar__info__items'>
							<NavLink to='/experience'>Experience</NavLink>
						</a>
					</li>
					<li>
						<a className='navbar__info__items'>
							<NavLink to='/education'>Education</NavLink>
						</a>
					</li>
					<li>
						<a className='navbar__info__items'>
							<NavLink to='/hobbies'>Hobbies</NavLink>
						</a>
					</li>
					<li>
						<a className='navbar__info__items'>
							<NavLink to='/'>Contact</NavLink>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
