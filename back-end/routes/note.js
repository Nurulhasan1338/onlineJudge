const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../module/Notes");
const { body, validationResult } = require("express-validator");



// Route #1 get all the notes of the user using "http://localhost:5000/api/note/fetchallNotes"
router.get("/fetchallNotes", fetchuser, async (req, res) => {
    try {
 const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
}  catch (error) {
    console.error(error);
    res.status(500).send("some internal error");
}
});


// Route # 2 add note of the user using "http://localhost:5000/api/note/addnote"
router.post("/addnote",fetchuser,
  [
    body("title", "enter the valide title").isLength({ min: 3 }),
    body("description", "description must be min 5 charactor long").isLength({
      min: 5,
    }),
  ],async (req, res) => {

    try {
    const {title,description,tag,color} = req.body;
    // if there is an error return bad request
    const errors = validationResult(req); // to check weather name is valide or not
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const note = new Notes({
        title,description,tag,color,user:req.user.id
    })
    const savedNote = await note.save();
    res.json(savedNote);

} catch (error) {
    console.error(error);
    res.status(500).send("some internal error");
}
  }
);

// vedio no 53
// Route # 3 updating note of the user using "http://localhost:5000/api/note/updatenote/:id"
router.put("/updatenote/:id",fetchuser,async (req,res)=>{
  try {
    const {title,description,tag,color} = req.body;
    // creating new note object
    newNote = {};
    // storing the updated value in newNote
    if(title) {newNote.title=title;}
    if(description) {newNote.description=description;}
    if(tag) {newNote.tag=tag;}
    if(color) {newNote.color=color}
  //  find the note and update it  
  let note = await Notes.findById(req.params.id);
  // if the id note the note is note present in database then return bad reqest
  if(!note) {return res.status(404).send("Not Found");}
  // if the fake user try to change to data
  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not allowed");
  }
  // if all is correct than update the notes
  // here params is used to access the id which we send through end point 
  note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
  res.json(note);
} catch (error) {
  console.error(error);
  res.status(500).send("some internal error");
}
});

// vedio no. 54  now from 55 front end work has started
// Route # 4 deleting note of the user using DELETE "http://localhost:5000/api/note/deletenote/:id"
router.delete("/deletenote/:id",fetchuser,async (req,res)=>{
  try{
  // line 82 to 88 code in only authenticating the user that he is only altering his notes only 
  //  find the note and update it  
  let note = await Notes.findById(req.params.id);
  // if the id note the note is note present in database then return bad reqest
  if(!note) {return res.status(404).send("Not Found");}
  // if the fake user try to delete data than dont allow it 
  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not allowed");
  }

  // if all is correct than update the notes
  // here params is used to access the id which we send through end point 
  note = await Notes.findByIdAndDelete(req.params.id)
  res.json({"Success":"Deleted",note:note});
}catch(error){
  console.error(error);
    res.status(500).send("some internal error");
}
});

module.exports = router;