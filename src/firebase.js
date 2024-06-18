
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'x-next-v2.firebaseapp.com',
  projectId: 'x-next-v2',
  storageBucket: 'x-next-v2.appspot.com',
  messagingSenderId: '1085413849476',
  appId: '1:1085413849476:web:de329003425ca5ef6ec5d1',
};


export const app = initializeApp(firebaseConfig);
