import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className='footer__top'>
				<ul className='footer__first' id='contact'>
					<li className='footer__top__item'>
						<h6>STAY IN TOUCH</h6>
						<a href='#'>Daana919@gmail.com</a>
						<a href='#'>+996777667713</a>
					</li>
					<li className='footer__top__item'>
						<h6>SOCIAL</h6>
						<a href='#'>Linkedln</a>
						<a href='#'>Instagram</a>
					</li>
					<li className='footer__top__item'>
						<h6>ADDRESS</h6>
						<p>Toktogula 126 Bishkek Kyrgyzstan</p>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
