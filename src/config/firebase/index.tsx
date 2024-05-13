// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwZtGPx2Sd50YxJH5GNRhp-bfyC9Wh3ZA',
  authDomain: 'filkomunklab.firebaseapp.com',
  projectId: 'filkomunklab',
  storageBucket: 'filkomunklab.appspot.com',
  messagingSenderId: '863006022439',
  appId: '1:863006022439:web:2cda27efbbad519e22e702',
  databaseURL: 'https://filkomunklab-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
