import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey : 'AIzaSyArSYQFjGO0VjgYROPoOPNJ3O6ml43C1uo',
    projectId:'placeme96',
    appId:'1022670999184',
    databaseUrl : 'https://console.firebase.google.com/project/undefined/firestore/data/',

}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;