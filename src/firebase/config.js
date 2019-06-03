import firebase from './firebase';
const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/repositories',
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ]
};

export default uiConfig;