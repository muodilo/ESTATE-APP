import React from 'react'
import '/style.css'
import SearchBar from '../../components/searchBar/SearchBar'

const HomePage = () => {
  return (
    <div className='h-svh flex pt-[50px]'>
      <div className='flex-[3]'>
        <div className='pr-[100px]'>
          <h1 className='text-4xl font-bold'>Find Real Estate & Get Dream Place</h1>
          <p className='text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sapiente, dolor deserunt pariatur non assumenda praesentium natus sequi excepturi provident!</p>
          <SearchBar />
          <div className='flex justify-between'>
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
      <div className='flex-[2] bg-[#fcf5f3] relative'>
        <img id='heroImage' src='/bg.png' alt='' className='absolute right-0'/>
      </div>
    </div>
  )
}

export default HomePage
