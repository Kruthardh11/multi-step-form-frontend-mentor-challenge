import React, { useState } from 'react';
import sideBar from '../images/bg-sidebar-desktop.svg';



const Stepthree = ({formData, setFormData}) => {

  const handleAddosChange = (event) => {
    const checked = event.target.checked;
    const value = checked ? 1 : "";
    setFormData({ ...formData, addos: value });
  };

  const handleAddlsChange = (event) => {
    const checked = event.target.checked;
    const value = checked ? 2 : "";
    setFormData({ ...formData, addls: value });
  };

  const handleAddcpChange = (event) => {
    const checked = event.target.checked;
    const value = checked ? 2 : "";
    setFormData({ ...formData, addcp: value });
  };

  console.log(formData)


  return (
    <div className='grid grid-cols-2'>
      <div className='relative grid grid-cols-1'>
      
      <div className='absolute grid grid-cols-2 flex flex-col justify-center items-center text-white pt-[10%] pl-[2%]' >
        <div className='pr-[40%] pl-[30%]'>
          <p className='mb-10 rounded-full py-1 px-2 border border-white'>1</p>
          <p className='mb-10 rounded-full border border-white py-1 px-2'>2</p>
          <p className='mb-10  mt-2 rounded-full   bg-blue-300 py-1 px-2'>3</p>
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

    <div>
        <p className='pt-[5%] font-ubuntu font-bold text-[25px] mb-[1%] text-gray-800'>Pick add-ons </p>
        <p className='font-medium text-gray-400 mb-[10%]'>add-ons help enhance your gaming experience</p>

       
            <div className="grid grid-cols-3 ">
  <div className="flex items-center justify-center border-l border-t border-b border-blue-900 rounded-sm mb-4">
    <input type="checkbox" className="mr-2" onChange={handleAddosChange}  />
   
  </div>
  <div className="flex items-center justify-center  border-t border-b border-blue-900 rounded-sm mb-4">
    <div>
                <p className='font-ubuntu-medium text-blue-900'>Online Services</p>
                <p className='font-ubuntu-regular text-gray-400 text-sm'>Access to multiplayer games</p>
    </div>
  </div>
  <div className="flex items-center justify-center border-r border-t border-b border-blue-900 rounded-sm font-ubuntu-regular text-gray-400 text-md mb-4">
    <div>$1/mo</div>
  </div>
  <div className="flex items-center justify-center border-l border-t border-b border-blue-900 rounded-sm mb-4">
    <input type="checkbox" className="mr-2"   onChange={handleAddlsChange} />
   
  </div>
  <div className="flex items-center justify-center  border-t border-b border-blue-900 rounded-sm mb-4">
    <div>
                <p className='font-ubuntu-medium text-blue-900'>Larger Storage</p>
                <p className='font-ubuntu-regular text-gray-400 text-sm'>Extra 1TB of cloud save</p>
    </div>
  </div>
  <div className="flex items-center justify-center border-r border-t border-b border-blue-900 rounded-sm font-ubuntu-regular text-gray-400 text-md mb-4">
    <div>$2/mo</div>
  </div>
  <div className="flex items-center justify-center border-l border-t border-b border-blue-900 rounded-sm">
    <input type="checkbox" className="mr-2" onChange={handleAddcpChange} />
    
  </div>
  <div className="flex items-center justify-center  border-t border-b border-blue-900 rounded-sm ">
    <div>
                <p className='font-ubuntu-medium text-blue-900'>Customizable Profile</p>
                <p className='font-ubuntu-regular text-gray-400 text-sm'>Custom theme on profile</p>
    </div>
  </div>
  <div className="flex items-center justify-center border-r border-t border-b border-blue-900 rounded-sm font-ubuntu-regular text-gray-400 text-md">
    <div>$2/mo</div>
  </div>
</div>
{/* <button onClick={setData3} className='bg-blue-800 rounded-full py-2 px-4 text-white  mt-6'>Confirm</button> */}
    </div>

   
    </div>

  )
}

export default Stepthree;