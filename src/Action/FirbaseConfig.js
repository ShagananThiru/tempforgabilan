import Firebase from 'firebase';


let config = {
  apiKey: 'AIzaSyCGyQd3CHa0O2OeWomPC9QMcWHOp4A1rHE',
  authDomain: 'aithena-beehive.firebaseapp.com',
  databaseURL: 'https://aithena-beehive.firebaseio.com',
  projectId: 'aithena-beehive',
  storageBucket: 'aithena-beehive.appspot.com',
  messagingSenderId: '448297613736'
};

let app = Firebase.initializeApp(config);


export const db = app.database();
