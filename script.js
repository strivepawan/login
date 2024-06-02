
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, set } from "firebase/database";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBu15zoSRSeVyu9UM9rNZZpPT6byYUxhqY",
    authDomain: "kiran-34f95.firebaseapp.com",
    projectId: "kiran-34f95",
    storageBucket: "kiran-34f95.appspot.com",
    messagingSenderId: "346458641132",
    appId: "1:346458641132:web:2f251fcb42d2816abd0bc9",
    measurementId: "G-3HZ3RE39G2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 const db = getDatabase(app);
 document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db, 'user/' + document.getElementById("username").value),
{
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phoone").value
});
alert ("Login Sucessfull  ");
 })