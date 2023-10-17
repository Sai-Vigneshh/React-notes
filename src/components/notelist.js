import Note from "./note";
import AddNote from "./AddNote"; // Change from "AddNote" to "Addnote"

const Notelist=({notes,handleAddNote,handleDeleteNote}) =>{
    return(
        <div className="note-list">
        {notes.map((note) => (

        <Note  id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
        ) )}
        <AddNote handleAddNote={handleAddNote} />

        </div>
    )
};
export default Notelist;