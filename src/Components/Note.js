import React from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from './NotefulContext';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

function Note(props) {
  return (
    <NotefulContext.Consumer>
      {({noteClicked, deleteNote}) => (
        <>
          <Link to={`/note/${props.note.id}`}>
              <div onClick={()=> noteClicked(props.note.id)} className ='note-div'>
                  <h2>{props.note.name}</h2>
                  {new Date(props.note.modified).toDateString()}
              </div>
          </Link>
              <button 
                className='remove-button' 
                onClick={(e) => {
                  e.stopPropagation()
                  props.history.push('/')
                  deleteNote(props.note.id)
                  }}>
                  Remove
              </button>
          </>
      )}
    </NotefulContext.Consumer>
  )

}

Note.propTypes = {
  note: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      modified: PropTypes.string.isRequired,
      folderId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
  })
};

export default withRouter(Note)