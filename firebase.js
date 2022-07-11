import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// import your_config from 'firebaseConfig.js';

// const firebaseConfig = your_config;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCvTa-KQg5gy7kFOjOVygT6mbO_SyAr2tA",
	authDomain: "audioapp-abcd1234.firebaseapp.com",
	projectId: "audioapp-abcd1234",
	storageBucket: "audioapp-abcd1234.appspot.com",
	messagingSenderId: "630830572398",
	appId: "1:630830572398:web:a183aa17793d4a5f73577f",
	measurementId: "G-991NF3L554"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const firebaseConfig = {
// 	apiKey: 'your-api-key',
// 	authDomain: 'your-auth-domain',
// 	projectId: 'your-project-id',
// 	storageBucket: 'your-storage-bucket',
// 	messagingSenderId: 'your-messaging-sender-id',
// 	appId: 'your-app-id',
// 	measurementId: 'your-measurement-id',
// };

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
