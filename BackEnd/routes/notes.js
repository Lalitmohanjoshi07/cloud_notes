const express = require("express");
const verifyUser = require("../middleware/verifyUser");
const { check, validationResult } = require("express-validator");
const Note = require("../models/Notes");

const router = express.Router();

//PORT 1:  create note using: Post "/api/notes/create". Login required.
router.put(
  "/create",
  verifyUser,
  [
    check("title", "Title should be atleast 3 characters").isLength({ min: 3 }),
    check(
      "description",
      "Description length should be atleast 10 characters"
    ).isLength({ min: 10 }),
  ],
  async (req, res) => {
    // validationResult function checks whether
    // any occurs or not and return an object
    const errors = validationResult(req);

    // If some error occurs, then this
    // block of code will run
    if (!errors.isEmpty()) {
      res.status(400).json(errors);
      return;
    }

    try {
      //creating a new note body
      let note = new Note({
        title: req.body.title,
        description: req.body.description,
        user: req.user.id,
        tag: req.body.tag,
      });
      let ans = await note.save();
      return res.json(ans);
    } catch (err) {
      console.log(err);
      return res.status(500).send("server error");
    }
  }
);

//PORT 2:  reading note using: Get "/api/notes/read". Login required.
router.get("/read", verifyUser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json({notes});
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
});

//PORT 3:  update note using: Post "/api/notes/update". Login required.
router.put("/update:id", verifyUser, async (req, res) => {
    const {title,description,tag}=req.body;
      try {
        //creating a updated note body
        let note = {};
        if(title)note.title=title;
        if(description)note.description=description;
        if(tag)note.tag=tag;
        //finding note
        let newNote= await Note.findById(req.params.id);
        //if note not found
        if(!newNote){ return res.status(404).send('not found');}
        //if user is not authorized
        if(newNote.user.toString() !== req.user.id){
            return res.status(500).send("access denied");
        }

        note= await Note.findByIdAndUpdate(req.params.id, {$set: note}, {new:true});

        return res.json(note);
      } catch (err) {
        console.log(err);
        return res.status(500).send("server error");
      }
    }
  );

  //PORT 4:  delte note using: DELETE "/api/notes/delete". Login required.
router.delete("/delete:id", verifyUser, async (req, res) => {
      try {
        //finding note
        let newNote= await Note.findById(req.params.id);
        //if note not found
        if(!newNote){ return res.status(404).send('not found');}
        //if user is not authorized
        if(newNote.user.toString() !== req.user.id){
            return res.status(500).send("access denied");
        }

        note= await Note.findByIdAndDelete(req.params.id);

        return res.json({"success":true,note});
      } catch (err) {
        console.log(err);
        return res.status(500).send("server error");
      }
    }
  );


module.exports = router;
