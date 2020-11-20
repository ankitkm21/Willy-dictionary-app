import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBPfEzay5LmXebPXuVgOrZHoqVg7W3G2W8",
  authDomain: "wireleib.firebaseapp.com",
  databaseURL: "https://wireleib.firebaseio.com",
  projectId: "wireleib",
  storageBucket: "wireleib.appspot.com",
  messagingSenderId: "265718609461",
  appId: "1:265718609461:web:a5b00c3bc25ebf3bc1a37c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
