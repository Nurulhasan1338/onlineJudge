
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const deleteFile = require('./deleteFile');
const { promises } = require('dns');

const output_dir = path.join(__dirname,"output");

if(!fs.existsSync(output_dir)){
    fs.mkdirSync(output_dir,{recursive:true});
}

const executecode = async (filepath,input)=>{
    const jobid = path.basename(filepath).split('.')[0];  // we  take if jobid from file name and split the name form  .(dot) give persent, it will return a array and taking the 0th index element as jobid

    // creating the path for output file
    const outpath = path.join(output_dir,`${jobid}.exe`);

    // we have to use await here as promises will use callback therore delete function will execute first and then file can be delete before executing it
    const result = await new Promise((resolve,reject)=>{
        // this is how to give command from the js progame and exec is the child process which is the instance of OS process which excescute the program
        exec(`g++ ${filepath} -o ${outpath} && cd ${output_dir} && echo ${input} | .\\${jobid}.exe`,
        (error,stdout,stderr)=>{
            if(error){
                reject({error,stderr});
            }
            if(stderr){
                reject(stderr);
            }
            resolve(stdout);
        }
        )
    });

    // this will delete the generated files
    const isdelete = await deleteFile(filepath,outpath);

    return result;

    
    

}

module.exports = executecode;