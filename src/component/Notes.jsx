import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes} = context;
    useEffect(() => {
        getNotes()       
    }, [])

    return (
        <div>
            <div className='container'>
                <AddNote />
                <div className='contextdata mt-5'>
                    {notes.map((note) => {
                        return <Noteitem key={note._id} note={note}/>
                        
                    })}
                </div>

            </div>
        </div>
    )
}

export default Notes 
