import React from 'react';
import './ErrorPage.css';

export default class ErrorPage extends React.Component {
    state = {
        error:null
    };

    static getDerivedStateFromError(error) {
        console.log(error);
        return {error};
    }

    render() {

        if(this.state.error) {
            return (
                <div className = 'errorPage'>
                    <h1>Sorry something went wrong</h1>
                    <p>Try refreshing the page and if that doesn't work click this <a href='http://localhost:3000/'>Link</a></p>
                </div>
            );
        }
        return this.props.children;
    }
}