import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDkdThKH-5XKSXbg1emOvYXsIcdwrGEzig",
    authDomain: "react-auth-project-2024.firebaseapp.com",
    projectId: "react-auth-project-2024",
    storageBucket: "react-auth-project-2024.firebasestorage.app",
    messagingSenderId: "662627902930",
    appId: "1:662627902930:web:1d57554e357f55c3f3140b",
    measurementId: "G-BBJC7PM9N2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default  auth;