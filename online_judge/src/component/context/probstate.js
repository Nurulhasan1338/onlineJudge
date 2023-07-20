import React from 'react';
import { useState } from 'react';
import probContext from './probContext.js';
// import address from "../config.js"


const Probstate = (props) => {

    const [probs,setProbs] = useState([]);

    const  getprobs= async()=>{
        try{
         const reponse = await fetch("http://localhost:5000/api/add/fetchprob",{
           method :'GET',
           headers:{
             'Content-Type':'application/json',
            //  "auth-token":localStorage.getItem('token')
           },
         });
        const data = await reponse.json();
        console.log(data.data);
        setProbs(data.data);
       }catch(err){
        //  showAlert(err,"danger");
        console.log(err);
       }
       }


  return (
     <probContext.Provider value ={{getprobs,setProbs,probs}}>
    {props.children}
    </probContext.Provider>
  )
}

export default Probstate;

