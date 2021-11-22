import './Navbar.css';
import React from 'react';

const Navbar = () => (
	<nav className='navbar'>
		<img id='parklogo' src='/Images/Park.svg' alt='LOGO' />
		<br />
		<div className='dropdown'>
			<button className='dropbtn' type='button'>
				<img id='ham1' src='/Images/Burger.svg' alt='BurgerButton' />
			</button>
			<div className='dropdown-content'>
				<a id='1' href='/'>
					Home
				</a>
				<a id='2' href='/Park'>
					First Page
				</a>
				<a id='2' href='/Park1'>
					Second Page
				</a>
			</div>
		</div>

		<hr />
	</nav>
);

export default Navbar;
