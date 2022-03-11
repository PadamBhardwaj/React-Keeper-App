import React ,{ useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

// import notes from "../notes";

import Adder from "./Adder";

function App(){
    const [itemArray,setItemArray]=useState([]);
    function addNote(note){
        
        setItemArray(prev=>{
            return [...prev,note]
        })

    }
    function deleteNote(id) {
        setItemArray(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }
    

    return <div>
        <Header />
        <DeleteIcon />
        
        <Adder onAdd={addNote} />
        {/* <Note title="Title" content="Note content"/> */}
        {itemArray.map((note,index)=>{return(<Note key={index} id={index} title={note.title} content={note.title} onDelete={deleteNote}/>);}
        )}
        {/* {notes.map(item => <Note key={item.id} title={item.title} content={item.content} />)} */}
        <Footer />
        
    </div>
}
export default App

