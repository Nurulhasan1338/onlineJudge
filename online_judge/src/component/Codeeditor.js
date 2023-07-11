import React,{useState} from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';

const Codeeditor = () => {

    const [code,setCode] = useState(
`#include<iostream>
using namespace std;
        
int main(){
        
// write your code here
        
return 0;
     }`
    );
  return (
    <div className='m-3'>
        <CodeEditor
      value={code}
      language="cpp"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: "#00000",
        height:25+"rem",
        overflow:"scroll-y",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
      
    </div>
  )
}

export default Codeeditor
