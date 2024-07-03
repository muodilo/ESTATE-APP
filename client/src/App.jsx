import {useState} from 'react'
import Navbar from "./components/navBar/Navbar";
import SidebarMenu from "./components/sidebarMenu/SidebarMenu";
import HomePage from './routes/homePage/HomePage';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const changeVisibility = (option) => {
    setIsOpen(option);
  }
  return (
		<div className='layout   lg:px-32 md:px-16 px-5 relative'>
			<div className=' h-svh'>
				<Navbar changeVisibility={changeVisibility} />
				<HomePage/>
				{isOpen && <SidebarMenu changeVisibility={changeVisibility} />}
			</div>
		</div>
	);
}