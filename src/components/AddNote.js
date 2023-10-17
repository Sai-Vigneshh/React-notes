import { useState } from "react";
const AddNote=({handleAddNote}) =>{
    const [noteText,setText]=useState("");
    const handleChange =(event)=>{
        setText(event.target.value);
    }
    const handleSave = () => {
        if (noteText.trim().length>0){
        handleAddNote(noteText);
        setText("");
        }
    };
      
    return (
        <div className="note new"> 
            <textarea rows="8" cols="10" placeholder="type here to add note.."  value={noteText} onChange={handleChange}>

            </textarea>
            <div className="note-footer">
                <small>200 remaining</small>
                <button className="Save" onClick={handleSave}>Save</button>
            </div>

        </div>
    )
}
export default AddNote;