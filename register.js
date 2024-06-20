  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDvj186Ju6i0xxbYFW2bTImyr1UBRwm3oQ",
    authDomain: "userdatabase-ccfb9.firebaseapp.com",
    projectId: "userdatabase-ccfb9",
    storageBucket: "userdatabase-ccfb9.appspot.com",
    messagingSenderId: "667199411176",
    appId: "1:667199411176:web:348cf41edf9f052bf6ca5d",
    measurementId: "G-69RP2EEQB3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);