import React,{useState} from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import add from "./config.js";

const Codeeditor = (props) => {

const host = add;

const [input,setInput] = useState("");
const [code,setCode] = useState(`#include<iostream>  \nusing namespace std;\nint main(){\ncout<<"hello hasan";\nreturn 0;\n }`);
  

  const handleClick = async (e) => {
      e.preventDefault();

      console.log(code);
      console.log(input);
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
              "input":input
            }),
          }
        );
        const output = await response.json();
    
      props.setOut(output.output);
      console.log(output);

        
      }catch (err) {
        console.log(err);
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
    {/* <textarea value={code} name="code" rows={20} cols={70} onChange={(e)=>{setCode(e.target.value)}} /> */}


    <div className='d-flex justify-content-between w-100 mt-3'>
    <div class="input-group">
  <span class="input-group-text">Input</span>
  <textarea class="form-control" name="input"  value={input} onChange={(evn) => setInput(evn.target.value)} aria-label="With textarea"></textarea>
</div>
      <div className=''> <button className='btn btn-success m-3' onClick={handleClick}>Submit</button></div>
    </div>
      
    </div>
  )
}

export default Codeeditor
