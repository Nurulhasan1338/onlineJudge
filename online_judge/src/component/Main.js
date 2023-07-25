import React, { useState,useContext,useEffect } from 'react'
import Codeeditor from './Codeeditor';
import { useLocation } from 'react-router-dom';
import imgpath from "./asset/rm218-bb-07.jpg"
import Progress from './progress.js';
import Progresscircle from './progressC.js';
import probContext from './context/probContext';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
  
  const context = useContext(probContext);
  const navigate = useNavigate();
  const [loding, setLoding] = useState({
    submit : false,
    run : false
  });
  const { Getprob, probs } = context;
  const [color,setColor] = useState("white");
  const id = localStorage.getItem('problem_id');
  useEffect(() => {
    if(localStorage.getItem('authtoken')){
      Getprob(id);
    }
    else{
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);


  const [out,setOut] = useState("");
  const [result,setResult] = useState({success:"",vecdict:"",eout:"",yout:""});
  const img = imgpath; 
  const path = useLocation();
  if(path.pathname==="/main"){
    document.body.style.backgroundImage = `url(${img})`;
  }
  

  return (
    <>
    <div className = "row w-95 m-2 my-3 justify-content-center text-light" >
     {/* Problem section with cconsole ,run,and submit buttens */}
     {probs.map((note, index) => {
          return (
    <div key={note._id} className='col-lg-6 col-md-12 row p-2 px-3 problem rounded'>
    <p className='display-6'>{note.name}</p>
        {/* problem part */}
        <div className={`col-12 problem-section border border-${color}`}>
          {note.description}
        </div>
        {/* console part */}
        <div className='col-12 row mt-2'>
            <div className={`col-6 border border-${color}`}>
            <p className='fs-4'><span className='me-2'>Output</span> {loding.run && <Progresscircle/>}</p>
            {out}
            </div>
            <div className='col-lg-6 col-md-12 row'>
            <div className='col-lg-4 col-md-3 fs-4'>
            Result
            </div>
            <div className='col-lg-8 col-md-6 d-flex justify-content-center align-items-center'>
            {loding.submit && <Progress/>}
            {!loding.submit && <span className={`mx-1 text-white p-1 fw-bolder rounded bg-${color}`}>{result.vecdict} </span>}
            </div>
            <div className='col-lg-12'>
            <ul className="list-group list-group-flush" >
              <li className={`list-group-item bg-transparent text-${color}`}><span className='mx-1'> Your Output :</span>{result.yout}</li>
              <li className={`list-group-item bg-transparent text-${color}`}><span className='mx-1'> Expected Output :</span>{result.eout}</li>
              <li className={`list-group-item bg-transparent text-${color}`}></li>
            </ul>
            </div>
            
            </div>

        </div>

    </div>
          )
          })}

    {/* Code editor section  */}

    <div className='col-lg-6 col-md-12 row'>
        <div className='col-12'>
        <Codeeditor setOut = {setOut} id={id} setResult={setResult} setColor={setColor} setLoding={setLoding} Alert = {props.showAlert}/>
    </div>

    </div>
    </div>
      
    </>
  )
}

export default Main
