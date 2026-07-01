import React from 'react'

const Noteitem = () => {
    return (
        <div>
            <div className="card" >
                <div className="card-body">
                    <div className='notedate'>
                        <p><i className="bi bi-calendar"></i> {new Date(note.Date).toLocaleDateString("en-GB", { timeZone: "UTC" }).replaceAll("/", "-")}</p>
                    </div>

                    <h4 className="card-title">{note.title}</h4>
                    <p className="card-text">{note.description}</p>

                    <div className='cardbtn'>
                        <button className='btn btn-primary me-2'><i className="bi bi-pencil"></i> Edit </button>
                        <button className='btn btn-danger'><i className="bi bi-trash3"></i> Remove </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
