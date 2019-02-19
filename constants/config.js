import Firebase from 'firebase';

let config = {  
    apiKey: 'AIzaSyCXcgvTNwHZ0s70vSlryI7KN2ur9Fzf77c',
    authDomain: 'personamaterial2018.firebaseapp.com',
    databaseURL: 'https://personamaterial2018.firebaseio.com',
    projectId: 'personamaterial2018',
    storageBucket: 'personamaterial2018.appspot.com',
    messagingSenderId: 'XXXXXXX'
  };

  let app = Firebase.initializeApp(config);  
  
  export const db = app.database(); 