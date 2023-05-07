import React, { useState } from "react";
import Stepone from './components/Stepone';
import Steptwo from './components/Steptwo';
import Stepthree from './components/Stepthree';
import Stepfour from './components/Stepfour';
import Thankyou from "./components/Thankyou";


function Form() {
 
  const [page, setPage] = useState(0);

  const FormSteps = ["stepOne", "stepTwo", "stepThree", "stepFour", "thnakyou"];
  // const [steptwoData, setSteptwoData] = useState(0)
  // const [stepthreeData, setStepthreeData] = useState(0)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    addos: "",
    addls: "",
    addcp: "",
  })

  const PageDisplay =()=>{
    if (page==0){
      return <Stepone formData={formData} setFormData={setFormData} />
    }
    if (page==1){
      return <Steptwo formData={formData} setFormData={setFormData} />
    }
    if (page==2){
      return <Stepthree  formData={formData} setFormData={setFormData} />
    }
    if (page==3){
      return <Stepfour formData={formData} setFormData={setFormData} />
    }
    if (page==4){
      return <Thankyou />
    }
  }
  return (
    <div className='w-screen h-screen bg-gray-100 px-[15%] py-[5%]'>
      {/* <div className="">{FormSteps[page]}</div> */}


        <div className="bg-white rounded-lg shadow-lg mx-auto pr-[10%] pl-[2%] py-[2%] " >{PageDisplay()}

          <div className="ml-[50%] ">

          <button 
          disabled = {page == 0}
          onClick={() => 
            {setPage((currpg)=> currpg - 1);
          }}>Go Back</button> 

          <button className="ml-[40%]  bg-blue-900 rounded-md text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled = {page == FormSteps.length - 1}
          onClick={() => {
            if(page === FormSteps.length-1){
              alert("Form submitted");
            }
            else
            {
            setPage((currpg)=> currpg + 1)}
          }}
          >
            {page === FormSteps.length-1 ? "Submit": "Next Step"}
          </button>
          </div>

          
        </div>
    </div>
  )
}

export default Form;
