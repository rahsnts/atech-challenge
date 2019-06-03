import React from 'react';

import firebase from '../../firebase/firebase';
import firebaseConfig from '../../firebase/config';
import {StyledFirebaseAuth} from 'react-firebaseui';
import AtechLogo from '../../assets/atech-logo.png';

class Login extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => { 
            if (user) {
                localStorage.setItem('USER_NAME', user.displayName);
                localStorage.setItem('USER_PHOTO_URL', user.photoURL);
                localStorage.setItem('USER_EMAIL', user.email);
            }
        });
    }
    
    render() {
        return (
            <main className="login">
                <aside className="auth-section">
                    <img 
                        src={AtechLogo}
                        alt="User" 
                        className="atech-logo"
                    />
                    <h2>SIGN IN</h2>
                    <StyledFirebaseAuth 
                        uiConfig={firebaseConfig} 
                        firebaseAuth={firebase.auth()} 
                    />
                </aside>
            </main>
        );
    }
}

export default Login;