const fs = require('fs');
const path = require('path');
const {v4 : uuid} = require('uuid');


// this below code will check weather directoy is existed or not 
// note that fs.existsSync is a synchronous function, meaning it will block the execution of the code until it has completed its operation. .
const directory_path = path.join(__dirname,'codes');

// fs.mkdirSync(directory_path,{recursive:true})   // is used to create a directory (folder) at the specified path,..
// indicates that the method should create parent directories if they are missing. This allows you to create nested directories in a single call. If recursive is set to false or not provided, and the parent directory doesn't exist, an error will be thrown.
if(!fs.existsSync(directory_path)){
  fs.mkdirSync(directory_path,{recursive:true});
}


// main function

const generateFile = (code,formate)=>{
const prob_id = uuid();
const filename = `${prob_id}.${formate}`;
const filepath = path.join(directory_path,filename);
fs.writeFileSync(filepath,code);

return filepath;
}

module.exports = generateFile;

