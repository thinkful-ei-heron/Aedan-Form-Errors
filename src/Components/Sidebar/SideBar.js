import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import NotefulContext from '../../NotefulContext'

export default function Sidebar(props) {
    let newArray = <NotefulContext.Consumer>
        {({contextState, folderCounter}) => (
            contextState.folders.map(folder => {
                return (
                    <li key= {folder.id} className={`listItem ${props.match.params.folderId === folder.id? 'highlight' : ''}`}>
                        <Link to={`/folder/${folder.id}`}>
                            <div className='listItem'>
                                {folder.name}
                                <span>{folderCounter[folder.id]}</span>
                            </div>
                        </Link>
                        
                    </li>
                   

                )
            })
        )}
    </NotefulContext.Consumer>
    return(
        <ul className='sidebar-ul'>
            {newArray}
            <li>
                <Link to={'/add-folder'}>+ Folder</Link>
            </li>
        </ul>
    );
    
}