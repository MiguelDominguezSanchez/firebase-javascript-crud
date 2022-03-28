// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'
import {
	getFirestore,
	collection,
	addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDeFVM2HQYjcy-MEvbgs6faNmE4tCavsek',
	authDomain: 'fir-javascript-crud-84695.firebaseapp.com',
	projectId: 'fir-javascript-crud-84695',
	storageBucket: 'fir-javascript-crud-84695.appspot.com',
	messagingSenderId: '450422570177',
	appId: '1:450422570177:web:a9a3628db63c91c75de840',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore()

export const saveTask = (title, description) => {
	// console.log(title, description)
	addDoc(collection(db, 'tasks'), { title, description })
}
