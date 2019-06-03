import React from 'react';

import { Route } from 'react-router-dom'
import InputIcon from '@material-ui/icons/Input';
import firebase from '../../firebase/firebase';

class Header extends React.Component {

    signOut(history) {
        firebase.auth().signOut().then(() => {
            history.push('/login');
            localStorage.clear();
        });
    }

    render() {
        return (
            <header>
                <Route render={({ history}) => (
                    <InputIcon 
                        onClick={this.signOut.bind(this, history)}
                    /> 
                )} />
            </header>
        );
    }
}

export default Header;