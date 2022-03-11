
import React, { useState } from "react";


function Adder(props) {
    const [note, setNote] = useState({
        title:"",
        content:""
    })

        function handleChange(event){
            // console.log(event.target.value);
            const {name,value}=event.target;
            setNote(prev =>{
                return{
                    ...prev,
                    [name]:value
                    
                }
            });
        }
    
        function submitNote(event){
            props.onAdd(note);
            event.preventDefault();
            setNote({title:"",content:""})
        }



    return <form>
        <input  onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        
        <button onClick={submitNote}>Add</button>
    </form>

}
export default Adder;