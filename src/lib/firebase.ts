import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCSS-k8Ek0kHETcjEaZoz7MvKLY1WFGCIM',
    authDomain: 'gidon-5c57a.firebaseapp.com',
    projectId: 'gidon-5c57a',
    storageBucket: 'gidon-5c57a.firebasestorage.app',
    messagingSenderId: '17915081734',
    appId: '1:17915081734:web:addd97aee844046b2d7f87',
    measurementId: 'G-W68N6EETET',
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export const analyticsPromise =
    typeof window === 'undefined' ? Promise.resolve(null) : isSupported().then((supported) => (supported ? getAnalytics(firebaseApp) : null));
