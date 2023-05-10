import React from 'react'
import sideBar from '../images/bg-sidebar-desktop.svg';

const Stepone = ({formData, setFormData}) => {

  
  return (
    <div className='grid grid-cols-2 '>
      <div className='relative grid grid-cols-1'>
      
          <div className='absolute grid grid-cols-2 flex flex-col justify-center items-center text-white pt-[10%] pl-[2%]' >
            <div className='pr-[40%] pl-[30%]'>
              <p className='mb-10 rounded-full py-1 px-2 bg-blue-300'>1</p>
              <p className='mb-10 rounded-full border border-white py-1 px-2'>2</p>
              <p className='mb-10  mt-2 rounded-full border border-white py-1 px-2'>3</p>
              <p className=' mt-10 rounded-full border border-white py-1 px-2'>4</p>
            </div>
            <div className=''>
              <p className='mb-5'>
                <p className='font-thin'> Step 1</p>
                <p className='font-ubuntu font-bold'>YOUR INFO</p>
              </p>
              <p className=' mb-7'>
                <p className='font-thin'> Step 2</p>
                <p className='font-ubuntu font-bold'>SELECT PLANS</p>
              </p>
              <p className=''>
                <p className='font-thin'> Step 3</p>
                <p className='font-ubuntu font-bold'>ADD-ONS</p>
              </p>
              <p className='mt-5'>
                <p className='font-thin'> Step 4</p>
                <p className='font-ubuntu font-bold'>SUMMARY</p>
              </p>
            </div>
          </div>
          <img className='' src={sideBar} alt='sidebar' />
      </div>
    <div >
        <p className='pt-[5%] font-ubuntu font-bold text-[25px] mb-[1%] text-gray-800'>Personal info</p>
        <p className='font-medium text-gray-400 mb-[10%]'>Please provide yourname,  email address, and phone number </p>
        <label class="block font-bold mb-[2%]" for="username">Name</label>
        <input class="w-full border border-gray-400 p-2 rounded-lg mb-[5%]" id="username" type="text"
         placeholder="Enter your name" required  value={formData.name}
         onChange={(event)=> setFormData({...formData, name: event.target.value}) }
         />
        <label class="block font-bold mb-[2%]" for="password">Email Address</label>
        <input class="w-full border border-gray-400 p-2 rounded-lg mb-[5%]" id="password" type='email'
         placeholder="Enter your email address" required  value={formData.email}
         onChange={(event)=> setFormData({...formData, email: event.target.value}) }
         />
        <label class="block font-bold mb-[2%] " for="password">Phone Number</label>
        <input class="w-full border border-gray-400 p-2 rounded-lg" id="password" type="text"
         placeholder="eg: +1 234 567 789" required  value={formData.phone}
         onChange={(event)=> setFormData({...formData, phone: event.target.value}) }
         />
    </div>
    </div>
  )
}

export default Stepone;