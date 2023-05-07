import React, { useState } from 'react'
import sideBar from '../images/bg-sidebar-desktop.svg';
import arcadeImg from '../images/icon-arcade.svg'
import advancedImg from '../images/icon-advanced.svg'
import proImg from '../images/icon-pro.svg'
const Steptwo = ({formData, setFormData}) => {

  //props.setFormData({})
  

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isToggled, setIsToggled] = useState(false);


  const setData2 =()=>{
    if(isToggled){
      if(isActive1){
        setFormData({...formData, plan: "90"});
      }
      if(isActive2){
        setFormData({...formData, plan: "120"})
      }
      if(isActive3){
        setFormData({...formData, plan: "150"});
      }
    }
    else{
      if(isActive1){
        setFormData({...formData, plan: "9"});
      }
      if(isActive2){
        setFormData({...formData, plan: "12"})
      }
      if(isActive3){
        setFormData({...formData, plan: "15"});
      }
    }
  }

  console.log(formData);
 
  return (
    <div className='grid grid-cols-2'>
      <div className='relative grid grid-cols-1'>
      
      <div className='absolute grid grid-cols-2 flex flex-col justify-center items-center text-white pt-[10%] pl-[2%]' >
        <div className='pr-[40%] pl-[30%]'>
          <p className='mb-10 rounded-full py-1 px-2 border border-white'>1</p>
          <p className='mb-10 rounded-full  bg-blue-300 py-1 px-2'>2</p>
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
    <div>
        <p className='pt-[5%] font-ubuntu font-bold text-[25px] mb-[1%] text-gray-800'>Select Plan</p>
        <p className='font-medium text-gray-400 mb-[10%]'>You have option of monthly or yearly billing</p>

        <div className='grid grid-cols-3'>
          <div className={`border rounded-md m-[10%] ${isActive1 ? 'border-blue-900' : 'border-blue-200'}`} 
            onClick={() => setIsActive1(!isActive1)}
            
            tabIndex={0}
            role="button"
            aria-pressed={isActive1}
            aria-label="Example button"
            
          >
            <img className='p-4' src={arcadeImg} />
            <p className='pt-10 px-4 pb-1 font-ubuntu font-bold text-blue-800'>Arcade</p>
            <p className='px-4 text-gray-400 '>{ isToggled ?   "$90/year" : "$9/mo"}</p>
            {isToggled && <p className='px-2 text-gray-400 '>2 months free</p>}
          </div>

          <div 
              className={`border rounded-md m-[10%] ${isActive2 ? 'border-blue-900' : 'border-blue-200'}`} 
              onClick={() => setIsActive2(!isActive2)}
              
              tabIndex={0}
              role="button"
              aria-pressed={isActive2}
              aria-label="Example button"
          >
            <img  className='p-4' src={advancedImg} />
            <p className='pt-10 px-4 pb-1 font-ubuntu font-bold text-blue-800' onClick={setData2}>Advanced</p>
            <p className='px-4 text-gray-400 '>{ isToggled ?   "$120/year" : "$12/mo"}</p>
            {isToggled && <p className='px-2 text-gray-400 '>2 months free</p>}
          </div>

          <div className={`border rounded-md m-[10%] ${isActive3 ? 'border-blue-900' : 'border-blue-200'}`} 
            onClick={() => setIsActive3(!isActive3)}
            
            tabIndex={0}
            role="button"
            aria-pressed={isActive3}
            aria-label="Example button"
            >
            <img className='p-4' src={proImg} />
            <p className='pt-10 px-4 pb-1 font-ubuntu font-bold text-blue-800'>Pro</p>
            <p className='px-4 text-gray-400 '>{ isToggled ?   "$150/year" : "$15/mo"}</p>
            {isToggled && <p className='px-2 text-gray-400 '>2 months free</p>}
          </div>
        </div>
        <div className='grid grid-cols-3 px-20 py-5'>
        <div className='text-blue-900 font-ubuntu'>
        Monthly
        </div> 
        <div>
        <button
        className='w-10 h-6 flex items-center rounded-full  bg-blue-900 focus:outline-none'
        onClick={() => setIsToggled(!isToggled)}
      >
        <span
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isToggled ? 'translate-x-5' : ''}`}
        ></span>
      </button>
        </div>
        <div className='text-blue-900 font-ubuntu'>
        Yearly
        </div>
        </div>
    </div>
    </div>
  )
}

export default Steptwo;