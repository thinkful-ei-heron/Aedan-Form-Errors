import React from 'react';
import Note from '../Note/Note';
import './NoteContent.css'
import NotefulContext from '../../NotefulContext';

function NoteContent(props) {
  return (
    <NotefulContext.Consumer>
      {({contextState}) => {
        let note = contextState.notes.find(note => note.id === props.match.params.noteId);
        let newArray= note.content.split('\n \r');
        let paragraphs = newArray.map((content, index) => {
          return <p key={index}>{content}</p>
        })
      
        return (
          <div className ='note-content'>
            <div className='noteLink'>
              <Note note={note}/>
            </div>
            {paragraphs}
          </div>
        )
      }}
      
    </NotefulContext.Consumer>
  )
  
}

export default NoteContent;