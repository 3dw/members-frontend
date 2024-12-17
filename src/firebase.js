// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ref, getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDU95egjb7rapaUJuVJYu0ZeSbP0OLaeCE",
    authDomain: "autolearn-members.asia-southeast1.firebaseapp.com",
    projectId: "autolearn-members",
    storageBucket: "autolearn-members.appspot.com",
    messagingSenderId: "535565819374",
    appId: "1:535565819374:web:ccfe472f513439f3a002ff",
    measurementId: "G-NTHZSSX71G",
    // Add the correct database URL
    databaseURL: "https://autolearn-members-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const projectsRef = ref(database, 'projects');
export const supervisorsRef = ref(database, 'supervisors');
export const usersRef = ref(database, 'users');
export const changelogsRef = ref(database, 'changelogs');
export const actionsRef = ref(database, 'actions');
//# sourceMappingURL=firebase.js.map
