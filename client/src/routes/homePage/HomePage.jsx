import React from 'react'
import '/style.css'
import SearchBar from '../../components/searchBar/SearchBar'

const HomePage = () => {
  return (
    <div className='md:h-svh flex md:pt-[50px] pt-[70px]'>
      <div className='flex-[3] flex items-center '>
        <div className='lg:pr-[100px] grid gap-5'>
          <h1 className='lg:text-5xl md:text-5xl text-3xl font-bold'>Find Real Estate & Get Dream Place</h1>
          <p className='text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sapiente, dolor deserunt pariatur non assumenda praesentium natus sequi excepturi provident!</p>
          <SearchBar />
          <div className='flex justify-between '>
            <div>
              <h1 className='text-3xl font-bold text-center'>2+</h1>
              <p className='text-center text-neutral-400'>Years of Experience</p>
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center'>6</h1>
              <p className='text-center text-neutral-400'>Award Gained</p>
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center'>30</h1>
              <p className='text-center text-neutral-400'>Property Ready</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-[2] bg-[#fcf5f3] relative lg:grid hidden'>
        <img id='heroImage' src='/bg.png' alt='' className='absolute right-0'/>
      </div>
    </div>
  )
}

export default HomePage
