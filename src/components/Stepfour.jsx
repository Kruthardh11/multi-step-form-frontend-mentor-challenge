import React, { useState } from 'react';
import sideBar from '../images/bg-sidebar-desktop.svg';
import { parse } from 'postcss';

const Stepfour = ({formData ,setFormData}) => {

  let planText = "";
  let costText = "";
  const plan = parseInt(formData.plan);
  if (plan === 9) {
    planText = "Arcade (monthly) ";
    costText = "$9/mo";
  } else if (plan === 12) {
    planText = "Advanced (monthly) ";
    costText = "$12/mo";
  } else if (plan === 15) {
    planText = "Pro (monthly) ";
    costText="$15/mo";
  } else if (plan === 90) {
    planText = "Arcade (yearly) ";
    costText = "$90/year";
  } else if (plan === 120) {
    planText = "Advanced (yearly)";
    costText= "$120/year";
  } else if (plan === 150) {
    planText = "Pro (yearly)  ";
    costText ="$150/year";
  }

  let addosValue = parseInt(formData.addos);
  if (isNaN(addosValue)) {
    addosValue = 0;
  }
  const showOnlineServices = addosValue !== 0;

  let addlsValue = parseInt(formData.addls);
  if (isNaN(addlsValue)) {
    addlsValue = 0;
  }
  const showLocalStorage = addlsValue !== 0;

  let addcpValue = parseInt(formData.addcp);
  if (isNaN(addcpValue)) {
    addcpValue = 0;
  }
  const showCustomizableProfile = addcpValue !== 0;

  const total = plan + addosValue + addcpValue + addlsValue;

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
        <div className='bg-  -100 p-[5%]'>
          <div className='grid grid-cols-2  border-b border-gray-400'>
            <div>
              <p className='pt-[5%] font-ubuntu font-bold text-[20px] mb-[1%] text-blue-900'> {planText} </p>
            </div>
            <div>
              <p className='pt-[5%] ml-[30%] font-ubuntu font-bold text-[20px] mb-[1%] text-blue-900'>{costText}</p>
            </div>
      </div>
      {showOnlineServices && <div className='grid grid-cols-2'>
        <p className='font-ubuntu-medium text-gray-400 mt-[5%]'>Online Services</p>
        <p className='font-ubuntu-medium text-gray-400 mt-[5%] ml-[30%]'>+${addosValue}/mo</p>
        </div>}
      {showLocalStorage && <p>Local Storage</p>}
      {showCustomizableProfile && <p>Customizable Profile</p>}
      <p>Total: {total}</p>
    </div>
        
            
    </div>

   
    </div>

  )
  
}

export default Stepfour