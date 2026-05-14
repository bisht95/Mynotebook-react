const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')
const Note = require('../models/Note')

// ROUTE 1 : Get All The Notes using : Get "/api/notes/fetchallnotes". Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    }
    //catch error
    catch (error) {
        console.error(error.message);
        res.status(500).send("Inernal sever error");
    }

})



// ROUTE 2 : Add a new Note using : post "/api/notes/addnote". Login Required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid name').isLength({ min: 3 }),
    body('description', 'description must be 35characters').isLength({ min: 3 }),], async (req, res) => {

        try {

            const { title, description, tag } = req.body;

            // if there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: errors.array() })
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()
            res.json(savedNote)

        }
        //catch error
        catch (error) {
            console.error(error.message);
            res.status(500).send("Inernal sever error");
        }

    })


module.exports = router