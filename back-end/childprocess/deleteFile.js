
const { exec } = require('child_process');


const deleteFile = async(filename,outpath)=>{

    return new Promise((resolve,reject)=>{
        exec(`rm -rf ${filename} && rm -rf ${outpath}`,
        (error,stdout,stderr)=>{
            if(error){
                console.log("error in deleteint ifle");
                reject(error);
            }
            resolve(stdout);
        

            
        })
    })
}

module.exports  = deleteFile;