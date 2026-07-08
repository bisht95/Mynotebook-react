import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{

    const notesInitial = [
        {
            "_id": "6a1d664f1a86e57506d2e7e9",
            "user": "6a1d62251a86e57506d2e7e4",
            "title": "saurav note 2",
            "description": "This is my second Note update",
            "tag": "saurav personal",
            "Date": "2026-06-01T11:00:31.346Z",
            "__v": 0
        },
        {
            "_id": "6a1d6c4075780a3b1ad9157b",
            "user": "6a1d62251a86e57506d2e7e4",
            "title": "saurav note 3",
            "description": "This is my Third Note",
            "tag": "saurav personal",
            "Date": "2026-06-01T11:25:52.321Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(notesInitial)

    // Add a Notes
    const addNote = (title, description, tag) => {
        //TODO: API Call
        console.log("Adding a new note")
        const note =  {
            "_id": "6a1d664f1a86e57506d2e7e9",
            "user": "6a1d62251a86e57506d2e7e4",
            "title": title,
            "description": description,
            "tag": tag,
            "Date": "2026-06-01T11:00:31.346Z",
            "__v": 0
        };

        setNotes(notes.concat(note));
    }

    // Edit a Notes
    const editNote = () => {

    }

    // Detele a Notes
    const deleteNote = () => {

    }

        
    return(
        <>
            <noteContext.Provider value={{notes, setNotes, addNote, editNote, deleteNote}}>
                {props.children}
            </noteContext.Provider>
        </>
    )

}


export default NoteState;
