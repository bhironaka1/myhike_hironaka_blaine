//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBIQS1vw-cOwmY0599wEkFsFTWEuW3QjZA",
    authDomain: "fir-comp1800-cb8d4.firebaseapp.com",
    projectId: "fir-comp1800-cb8d4",
    storageBucket: "fir-comp1800-cb8d4.appspot.com",
    messagingSenderId: "930495559224",
    appId: "1:930495559224:web:35f3f7f0c7bee0808758cd",
    measurementId: "G-C0J85NVT46"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();