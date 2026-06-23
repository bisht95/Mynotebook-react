import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Home = () => {

  const context = useContext(noteContext);
  const {notes, setNotes} = context;
  console.log(context)

  return (
    <div>
        <div className='container'>
            <p>this is Home Page</p>

            <div className='contextdata'>
                {notes.map((note) =>{
                  return(
                  <div className='mb-5' key={note._id}>
                    <p>{note.title}</p>
                    <p>{note.description}</p>
                    <p> Posted Date : {new Date(note.Date).toLocaleDateString("en-GB", {timeZone: "UTC"}).replaceAll("/", "-")}</p>
                  </div>
                  )
                })}
            </div>

        </div>
    </div>
  )
}

export default Home
