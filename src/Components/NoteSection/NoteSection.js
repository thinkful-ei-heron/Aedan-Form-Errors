import React from 'react';
import Note from '../Note/Note';
import NotefulContext from '../../NotefulContext';
import {withRouter} from 'react-router-dom';

function NoteSection(props) {
    let newArray = <NotefulContext.Consumer>
        {({contextState}) => {
            let noteArray = props.match.params.folderId ? contextState.notes.filter(note => note.folderId === props.match.params.folderId) : contextState.notes;
            
            return noteArray.map(note => {
                return (
                    <li key={note.id} className="noteList">
                        <Note note={note} />
                    </li>
                );
            })  
        }}
    </NotefulContext.Consumer>
    return (
        <div>
            <ul>
                {newArray}
            </ul>
            <button onClick={ () => props.history.push('/add-note')}>Add a Note</button>
        </div>
    );
}

export default withRouter(NoteSection);