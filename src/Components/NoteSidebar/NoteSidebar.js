import React from 'react';
import './NoteSidebar.css';
import {withRouter} from 'react-router-dom';
import NotefulContext from '../../NotefulContext';

function NoteSidebar(props) {
  return (
    <NotefulContext.Consumer>
      {({contextState}) => (
        <div className="note-sidebar">
          <button className="backButton" onClick={() => props.history.goBack()}>
            Back
          </button>
          <h2 className="verticalText">{contextState.currentNote.folder}</h2>
        </div>
      )}
    </NotefulContext.Consumer>
  )
}

export default withRouter(NoteSidebar);