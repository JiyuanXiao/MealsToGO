import {
  initializeAuth,
  getReactNativePersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMyJS-zorGnprXCSwClEsy1UKX2IAz31g",
  authDomain: "mealstogo-8c501.firebaseapp.com",
  projectId: "mealstogo-8c501",
  storageBucket: "mealstogo-8c501.appspot.com",
  messagingSenderId: "810400728229",
  appId: "1:810400728229:web:435c6000d73bcd8a32b94c",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const loginRequest = (email, password) => {
  //const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  //const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signOutRequest = () => {
  //const auth = getAuth();
  return signOut(auth);
};
