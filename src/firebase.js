import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDS5k29udIpFP02nuJAcPXYVd5WtDWCVeI",
  authDomain: "gymvisa-d2c4a.firebaseapp.com",
  projectId: "gymvisa-d2c4a",
  storageBucket: "gymvisa-d2c4a.appspot.com",
  messagingSenderId: "1057011839530",
  appId: "1:1057011839530:web:d1ba5e78770bb49e778953",
  measurementId: "G-GZF7QT1B2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);
