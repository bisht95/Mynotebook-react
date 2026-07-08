import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"});

    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
       
        setNote({
            title: "",
            description: "",
            tag: "default"
        });
    }

    const onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }


  return (
    <div className='addnote-sec'>
        <h4>Add Your Note</h4>
        <form>
            <div className="mb-3 mt-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" name="title" value={note.title} placeholder="Enter Note" onChange={onChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description:</label>
                <input type="text" className="form-control" id="description" value={note.description} placeholder="Enter Description" name="description" onChange={onChange}/>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}

export default AddNote
