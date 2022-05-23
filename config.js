import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCngJQR9Q202CJkjm-puj9ufYJML7C6ED0",
  authDomain: "englishlearningapp-61e8c.firebaseapp.com",
  databaseURL: "https://englishlearningapp-61e8c-default-rtdb.firebaseio.com",
  projectId: "englishlearningapp-61e8c",
  storageBucket: "englishlearningapp-61e8c.appspot.com",
  messagingSenderId: "781932697166",
  appId: "1:781932697166:web:570f45c3c0f12775e0951f"
};
firebase.initializeApp(firebaseConfig)
export default firebase.database()