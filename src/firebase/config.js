import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace with your Firebase configuration
// Get this from your Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyATaSfPLtU8LnmZsNOBpug5AZYfyBUHDZs",
  authDomain: "kodecamp-dashboard.firebaseapp.com",
  projectId: "kodecamp-dashboard",
  storageBucket: "kodecamp-dashboard.firebasestorage.app",
  messagingSenderId: "655368898634",
  appId: "1:655368898634:web:99a894c65273d84eb5beb3",
  measurementId: "G-0WPH0YMFT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app; 