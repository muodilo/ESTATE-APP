import React from 'react'
import Logo from '../../assets/logo11.png'
import { CgMenuRound } from "react-icons/cg";

const Navbar = ({ changeVisibility }) => {
	return (
		<div className='flex justify-between px-2 pt-1 items-center py-3 fixed left-0 right-0'>
			<div className='flex items-center '>
				<div className='flex items-center gap-3'>
					<img src={Logo} alt='logo' className='md:w-[45px] w-[35px]' />
					<p className='font-bold lg:flex hidden'>UnlimitedEstate</p>
				</div>
			</div>
			<ul className='md:flex items-center gap-10 hidden'>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Agents</li>
			</ul>

			<div>
				<ul className='md:flex items-center justify-end gap-5 hidden'>
					<li>Log In</li>
					<li className='bg-orange-300 px-5 py-2 rounded'>Sign Up</li>
				</ul>
			</div>
			<div className='md:hidden flex'>
				<CgMenuRound className='text-2xl' onClick={()=>changeVisibility(true)}/>
			</div>
		</div>
	);
};

export default Navbar
