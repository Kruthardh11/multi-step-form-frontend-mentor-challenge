import React from 'react';
import sideBar from '../images/bg-sidebar-desktop.svg';

const Stepfour = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='relative grid grid-cols-1'>
      
      <div className='absolute grid grid-cols-2 flex flex-col justify-center items-center text-white pt-[10%] pl-[2%]' >
        <div className='pr-[40%] pl-[30%]'>
          <p className='mb-10 rounded-full py-1 px-2 border border-white'>1</p>
          <p className='mb-10 rounded-full border border-white py-1 px-2'>2</p>
          <p className='mb-10  mt-2 rounded-full border border-white    py-1 px-2'>3</p>
          <p className=' mt-10 rounded-full bg-blue-300 py-1 px-2'>4</p>
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

    <div>
        <p className='pt-[5%] font-ubuntu font-bold text-[25px] mb-[1%] text-gray-800'>Finishing Up</p>
        <p className='font-medium text-gray-400 mb-[10%]'>Double check everything looks OK before confirming</p>

        
            
    </div>

   
    </div>

  )
  
}

export default Stepfour