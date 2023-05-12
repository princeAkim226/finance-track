// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBc04S9NCVc1ziIFNh1fjrw6KbrsM7Drko',
  authDomain: 'moneytrack-c95f6.firebaseapp.com',
  projectId: 'moneytrack-c95f6',
  storageBucket: 'moneytrack-c95f6.appspot.com',
  messagingSenderId: '812075644919',
  appId: '1:812075644919:web:8d42f69d35e0f57e21a0f2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app );

export { app, db,auth };
