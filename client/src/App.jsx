import {useState} from 'react'
import Navbar from "./components/navBar/Navbar";
import SidebarMenu from "./components/sidebarMenu/SidebarMenu";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const changeVisibility = (option) => {
    setIsOpen(option);
  }
  return (
		<div className='layout   lg:px-32 md:px-16 px-5 relative'>
			<div className='bg-orange-100 h-svh'>
				<Navbar changeVisibility={changeVisibility} />
				{isOpen && <SidebarMenu changeVisibility={changeVisibility} />}
			</div>
		</div>
	);
}