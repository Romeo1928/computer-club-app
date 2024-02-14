import { createContext } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyABJW6p12iNQ4SPchUyPYVqd-uBSLbhkHs',
  authDomain: 'computer-club-app-eec79.firebaseapp.com',
  projectId: 'computer-club-app-eec79',
  storageBucket: 'computer-club-app-eec79.appspot.com',
  messagingSenderId: '64369637816',
  appId: '1:64369637816:web:411d28faab4119f61bf74d',
  measurementId: 'G-Y54240DQ79',
};

export const Context = createContext(null);

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
