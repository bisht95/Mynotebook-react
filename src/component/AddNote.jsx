import React from 'react'

const AddNote = () => {
  return (
    <div className='addnote-sec'>
        <h4>Add Your Note</h4>
        <form>
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Add Note:</label>
                <input type="text" className="form-control" id="addNote" placeholder="Enter Note" name="addNote" />
            </div>

            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Description:</label>
                <input type="text" className="form-control" id="description" placeholder="Enter Description" name="description" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default AddNote
