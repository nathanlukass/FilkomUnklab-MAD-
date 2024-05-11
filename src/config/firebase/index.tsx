// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6lHa_RKI26fLXhD40b0cvRgoi_E6hl8Q',
  authDomain: 'demofilkomunklab.firebaseapp.com',
  projectId: 'demofilkomunklab',
  storageBucket: 'demofilkomunklab.appspot.com',
  messagingSenderId: '197632883350',
  appId: '1:197632883350:web:01692eba9b7a8494a220b7',
  databaseURL: 'https://demofilkomunklab-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
