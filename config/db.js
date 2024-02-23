import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyClTC_DFLb7jJpTX4UBy67l8zMQ4Z9yLFo",
    authDomain: "react-835a8.firebaseapp.com",
    databaseURL: "https://react-835a8.firebaseio.com",
    projectId: "react-835a8",
    storageBucket: "react-835a8.appspot.com",
    messagingSenderId: "236548994479",
    appId: "1:236548994479:web:4b881bcbeb02072c"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();

