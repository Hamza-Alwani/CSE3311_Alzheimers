import * as firebase from 'firebase';

const config={
    apiKey: "AIzaSyCrokXMvBewGnbmqrmBjDCMGdcuzsjVEdI",
    authDomain: "alzeihmerstudy.firebaseapp.com",
    databaseURL: "https://alzeihmerstudy.firebaseio.com",
    projectId: "alzeihmerstudy",
    storageBucket: "alzeihmerstudy.appspot.com",
    messagingSenderId: "745356370697",
    appId: "1:745356370697:web:d4b0aed1fa17c058ac69d8",
    measurementId: "G-RZ32M5TQ6J"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;