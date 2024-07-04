import React,{useState} from 'react'
import Navbar from '../components/navBar/Navbar'
import SidebarMenu from '../components/sidebarMenu/SidebarMenu'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    const [isOpen, setIsOpen] = useState(false);

		const changeVisibility = (option) => {
			setIsOpen(option);
		};
  return (
		<div className='lg:px-32 md:px-16 px-5 relative'>
			<div className=' h-svh'>
				<div className=''>
					<Navbar changeVisibility={changeVisibility} />
				</div>
				<Outlet/>
				{isOpen && <SidebarMenu changeVisibility={changeVisibility} />}
			</div>
		</div>
  )
}

export default Layout
