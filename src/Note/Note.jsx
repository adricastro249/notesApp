import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
   constructor(props){
       super(props);
       this.noteContent = props.noteContent;
       this.noteId = props.noteId;
   } 

handelRemove(id){
   const response = window.confirm('estás seguro de que quieres eliminarlo ')
    
   if (response){
    this.props.removeNote(id);
   }
  return;
}

   render(){
       return(
       <div className="Note">
           <span
           onClick={() => this.handelRemove(this.noteId)}
           >&times;</span>
           <p>{this.noteContent}</p>
       </div>
       )
   }
}

export default Note;
