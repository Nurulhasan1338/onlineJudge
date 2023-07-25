import React,{useState} from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import add from "./config.js";




const Codeeditor = (props) => {


const host = add;

const [input,setInput] = useState("white");
const [code,setCode] = useState(`#include<iostream>  \nusing namespace std;\nint main(){\ncout<<"hello hasan";\nreturn 0;\n }`);
  

  const handleClick = async (e) => {
      e.preventDefault();
      props.setLoding({run:true});
      try {
        const response = await fetch(
          `${host}api/run/runcode`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "format":"cpp",
              "code": code,
              "input":input,
              "id":props.id
            }),
          }
        );
        const output = await response.json();
    
      props.setOut(output.output);

      }catch (err) {
        props.showAlert(err);
      }
      props.setLoding({run:false});
    
  };
  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        props.setLoding({submit:true});
        const response = await fetch(
          `${host}api/run/submit`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "format":"cpp",
              "code": code,
              "input":input,
              "id":props.id
            }),
          }
        );
        const output = await response.json();
        if(output.status===true){
          if(output.success===true){
            props.setColor("success");
          }
          else{
            props.setColor("danger");
          }
          props.setResult({success:output.success,vecdict:output.verdict,yout:output.yout,eout:output.eout});

      }
      else{
        props.showAlert(output);
      }
      props.setLoding({submit:false});
      }catch (err) {
        props.showAlert(err);
      }
    
  };




  return (
    <div className='m-3'>
    <CodeEditor
      value={code}
      language="cpp"
      placeholder="Please enter JS code."
      onChange={(evn) => {setCode(evn.target.value)}}
      padding={15}
      name='code'
      style={{
        fontSize: 12,
        backgroundColor: "#00000",
        height:25+"rem",
        overflow:"scroll-y",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  


    <div className='row w-100 mt-4'>
    <div className="col-lg-12 col-md-12 input-group rounded">
  <span className="input-group-text">Input</span>
  <textarea className="form-control rounded-end" name="input"  value={input} onChange={(evn) => setInput(evn.target.value)} aria-label="With textarea"></textarea>
</div>
      <div className='col-2 my-3'> <button className='btn btn-success mx-1' onClick={handleClick}>Run</button></div>
      <div className='col-2 my-3'> <button className='btn btn-success mx-1' onClick={handleSubmit}>Submit</button></div>
  </div>
      
    </div>
  )
}

export default Codeeditor
