import React, { useState } from 'react'
import Codeeditor from './Codeeditor';
import { useLocation } from 'react-router-dom';
import imgpath from "./asset/rm218-bb-07.jpg"

const Main = () => {
  
  const [out,setOut] = useState("");
  const img = imgpath; 
  const path = useLocation();
  if(path.pathname==="/main"){
    document.body.style.backgroundImage = `url(${img})`;
  }


  return (
    <>
    <div class = "row w-100 my-5 justify-content-center text-light" >
       
     {/* Problem section with cconsole ,run,and submit buttens */}

    <div className='col-6 row'>
    <p className='display-6'>Problem</p>
        {/* problem part */}
        <div className='col-12 problem-section'>
           
        </div>
        {/* console part */}
        <div className='col-12'>
        <p className='display-6'>Output</p>
        {out}
        </div>

        
    </div>

    {/* Code editor section  */}

    <div className='col-6 row'>
        <div className='col-12'>
        <h1 className='m-3'>This is code editor</h1>
        <Codeeditor setOut = {setOut}/>
        </div>

    </div>


    </div>
      
    </>
  )
}

export default Main
