import React from 'react';
import { useState } from 'react';
import probContext from './probContext.js';
import add from "../config.js"


const Probstate = (props) => {

    const [probs,setProbs] = useState([]);
    const host = add;

    const  getprobs= async()=>{
        try{
         const reponse = await fetch(`${host}api/add/fetchprobs`,{
           method :'GET',
           headers:{
             'Content-Type':'application/json',
            //  "auth-token":localStorage.getItem('token'),
           },
         });
        const data = await reponse.json();
        setProbs(data.data);
       }catch(err){
        //  showAlert(err,"danger");
        console.log(err);
       }
       }

       
    const  Getprob= async(id)=>{
        try{
         const reponse = await fetch(`${host}api/add/fetchprob`,{
           method :'POST',
           headers:{
             'Content-Type':'application/json',
            //  "auth-token":localStorage.getItem('token'),
            
           },
           body: JSON.stringify({
            "id":id
          }),
         });
      const Data = await reponse.json();
      setProbs(Data.data);
       }catch(err){
        //  showAlert(err,"danger");
        console.log(err);
       }
       }


  return (
     <probContext.Provider value ={{getprobs,setProbs,probs,Getprob}}>
    {props.children}
    </probContext.Provider>
  )
}

export default Probstate;

