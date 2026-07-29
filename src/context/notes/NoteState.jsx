import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial)
    // Get all Notes

    const getNotes = async () => {
        //Fetch Note : Api Call

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmExZDYyMjUxYTg2ZTU3NTA2ZDJlN2U0In0sImlhdCI6MTc4MDMxMDc2Nn0.1WTvVopF6B45iB-1mZbBDqSQBms5xtPONeMK9InCfoQ'
            }
        });

        const json = await response.json();
        console.log(json)
        setNotes(json);
    }


    // Add a Notes
    const addNote = (title, description, tag) => {
        //TODO: API Call
        console.log("Adding a new note")
        const note = {
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
    const deleteNote = (id) => {
        // TODO: API Call 
        console.log("deleting the note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes)
    }


    return (
        <>
            <noteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes }}>
                {props.children}
            </noteContext.Provider>
        </>
    )

}


export default NoteState;
