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
        
    return(
        <>
            <noteContext.Provider value={{notes, setNotes}}>
                {props.children}
            </noteContext.Provider>
        </>
    )

}


export default NoteState;
