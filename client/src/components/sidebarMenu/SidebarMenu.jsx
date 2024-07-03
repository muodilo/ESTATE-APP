import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const SidebarMenu = ({ changeVisibility }) => {
	return (
		<div className='w-[50%] p-2 h-svh absolute right-5 top-0 bottom-0 bg-neutral-500 text-white md:hidden grid shadow'>
			<div className='flex justify-between'>
				<div></div>
				<IoCloseCircleOutline
					className='text-2xl'
					onClick={() => changeVisibility(false)}
				/>
			</div>
		</div>
	);
};

export default SidebarMenu
