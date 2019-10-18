import React from 'react';
import './AddFolder.css'
import NotefulContext from '../../NotefulContext';
import {withRouter} from 'react-router-dom';

class AddFolder extends React.Component {

    render () {
        return (
            <NotefulContext.Consumer>
                {({validateForm}) => (
                    <form onSubmit={(event) => {
                        validateForm(event);
                        this.props.history.push('/');
                    }}>
                        <legend>Create A Folder</legend>
                        <div>
                            <label htmlFor='addFolderInput'>Name</label>
                            <input type='text' id='addFolderInput'required/>
                            <button type='submit'>Add Folder</button>
                        </div>
                    </form>
                )}
            </NotefulContext.Consumer>
        );
    }
}

export default withRouter(AddFolder);