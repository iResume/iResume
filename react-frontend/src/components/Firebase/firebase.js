import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDyN5Vcis2Y3Fqib-tRnl8sAcMrO3cEE1E",
  authDomain: "iresume-db1b7.firebaseapp.com",
  databaseURL: "https://iresume-db1b7.firebaseio.com",
  projectId: "iresume-db1b7",
  storageBucket: "iresume-db1b7.appspot.com",
  messagingSenderId: "951146060136",
  appId: "1:951146060136:web:85b000d7f88dfa699bdedd",
  measurementId: "G-8N7KGK3FE9"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    // auth api
    // sign up
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    // log in
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    // sign out
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

}
export default Firebase;

