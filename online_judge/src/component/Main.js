import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';
import Codeeditor from './Codeeditor';

const Main = () => {
  return (
    <>

    
    <div class = "row w-100 my-5 justify-content-center" >
       
     {/* Problem section with cconsole ,run,and submit buttens */}

    <div className='col-6 row'>
        {/* problem part */}
        <div className='col-12 problem-section bg-warning'>
            <LoremIpsum p={3} />
        </div>
        {/* console part */}
        <div className='col-12 bg-info'>
        <LoremIpsum p={1} />
        </div>

        
    </div>

    {/* Code editor section  */}

    <div className='col-6 row'>
        <div className='col-12'>
        <h1>this is code edton</h1>
        <Codeeditor/>

         {/* submit and run button */}
         <div className='col-12 bg-dark'>
        <LoremIpsum p={1} />
        </div>

        </div>

    </div>


    </div>
      
    </>
  )
}

export default Main
