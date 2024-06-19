import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDAcYt7xD0xyOx80xJueBzLQzSYZNtN4zw',
  authDomain: 'handouts-27c4a.firebaseapp.com',
  projectId: 'handouts-27c4a',
  storageBucket: 'handouts-27c4a.appspot.com',
  messagingSenderId: '892550087052',
  appId: '1:892550087052:web:8bf634c48a6cee5dfe56a9',
};

const app = initializeApp(config);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, storage };
