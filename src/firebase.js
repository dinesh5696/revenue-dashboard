import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi6JFDc3HAi5-M4IYfO9Q7bGmZJM1qdtc",
  authDomain: "revenue-dev-1f16d.firebaseapp.com",
  projectId: "revenue-dev-1f16d",
  storageBucket: "revenue-dev-1f16d.appspot.com",
  messagingSenderId: "170822381412",
  appId: "1:170822381412:web:24290f38e50ff8774a1471",
  measurementId: "G-PS1BZWY3MS"
};
const app = firebase.initializeApp(firebaseConfig);
export const auth= app.auth();
export const db=firebase.firestore();
export default app;
// {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// }