import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWgZiQb4DsailmJYXJBO8610sg2t6-X7o",
  authDomain: "know-your-crypto-5b150.firebaseapp.com",
  projectId: "know-your-crypto-5b150",
  storageBucket: "know-your-crypto-5b150.appspot.com",
  messagingSenderId: "153527351137",
  appId: "1:153527351137:web:39e24492ef4bd7c9573720",
  measurementId: "G-3WZHT619B8",
  databaseURL : 'https://know-your-crypto-5b150-default-rtdb.firebaseio.com'
};

export const app = initializeApp(firebaseConfig)
