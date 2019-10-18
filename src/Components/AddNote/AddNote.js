import React from 'react';
import NotefulContext from '../../NotefulContext';
import {withRouter} from 'react-router-dom';
import './AddNote.css'

class AddNote extends React.Component { 
  render() { 
    return (
      <NotefulContext.Consumer>
        {({validateNote, contextState}) => (
          <form onSubmit={(event) => {
            validateNote(event);
            this.props.history.push('/');
          }}>
            <legend>Create A Note</legend> 
            <div> 
              <label htmlFor='addNoteName'>Name</label>
              <input type='text' id='addNoteName' required/> 
              <label htmlFor='addNoteContent'>Content</label>
              <textarea id='addNoteContent' required></textarea>
              <label htmlFor = 'selectFolder'>Folder</label>
              <select  id='selectFolder'>
                {contextState.folders.map(folder => {
                return( 
                  <option key={folder.id} value={folder.id}>{folder.name}</option> 
                )
                })}
              </select> 
              <button type='submit'>Add Note</button>
            </div>
          </form> 
        )}
      </NotefulContext.Consumer> 
    )
  }
}

export default withRouter(AddNote);