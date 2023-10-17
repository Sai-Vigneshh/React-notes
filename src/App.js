import './index.css';
import { useState ,useEffect} from 'react';
import {nanoid} from "nanoid"
import Notelist from "./components/notelist";
import AddNote from "./components/AddNote"; // Change from "AddNote" to "Addnote"
import Search from './components/Search';
import Header from './components/Header';

const App=() => {
  const [notes,setnotes]=useState([
    { 
      id:nanoid(),
      text:"this is first",
      date:"19/08/2003",
    },
    { 
      id:nanoid(),
      text:"this is Second",
      date:"19/08/2003",

    },
    { 
      id:nanoid(),
      text:"this is Third",
      date:"19/08/2003",

    },
    { 
      id:nanoid(),
      text:"this is add",
      date:"19/08/2003",

    }
  ])
  console.log(notes)
  const [searchText ,setSearchText]=useState("")
  const [darkMode,setDarkMode]=useState(false)

  useEffect(() => {
    try {
      const savedNotes = JSON.parse(localStorage.getItem("react-app-data"));
      console.log(savedNotes)
      if (savedNotes) {
        setnotes(savedNotes);
      }
    } catch (error) {
      console.error("Error loading notes from local storage:", error);
      // Handle the error, or set a default value for `notes` if loading fails.
    }
  }, []);
  
  useEffect(()=>{
    localStorage.setItem("react-app-data",JSON.stringify(notes));
  },[notes]);

  const addNote=(text)=>{
    const date=new Date();
    const newNote={
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote]
    setnotes(newNotes);
  };
   
  const DeleteNote=(id)=>{
    const newNotes= notes.filter((note) =>note.id !==id);
    setnotes(newNotes);
  }

  return( <div className={`${darkMode && "dark-mode"}`}>
    <div className="container">
    <Header handleToggleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText}/>
    <Notelist notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={DeleteNote}/>
    </div>
    </div>
  ); 
}


export default App;