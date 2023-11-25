import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDLw8DY9o5JVdi3FbbFnzfs0CzAO-RvgKY',
	authDomain: 'todolistproject-8d626.firebaseapp.com',
	projectId: 'todolistproject-8d626',
	storageBucket: 'todolistproject-8d626.appspot.com',
	messagingSenderId: '1007831234034',
	appId: '1:1007831234034:web:96926107b5adc7bf35e76b',
	databaseURL:
		'https://todolistproject-8d626-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
