import * as firebase from 'firebase';

const config={
    apiKey: "AIzaSyABKbfit7zCu8CI8ZXt35o6iQG5C1A-oWs",
    authDomain: "alzheimers-f3255.firebaseapp.com",
    databaseURL: "https://alzheimers-f3255.firebaseio.com",
    projectId: "alzheimers-f3255",
    storageBucket: "alzheimers-f3255.appspot.com",
    messagingSenderId: "719559425984",
    appId: "1:719559425984:web:279eeb392e04c5a53e1225",
    measurementId: "G-J3SXRLD537"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;