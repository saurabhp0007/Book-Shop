// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQNUfqNNglLVDv6ULnDDxwUcCEN_-Mdvo",
    authDomain: "mern-book-inventory-863e5.firebaseapp.com",
    projectId: "mern-book-inventory-863e5",
    storageBucket: "mern-book-inventory-863e5.appspot.com",
    messagingSenderId: "575632929673",
    appId: "1:575632929673:web:15df1ef6a0017b26f0e758",
    measurementId: "G-C4T5LTGMSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;