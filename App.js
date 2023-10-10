import React from "react";
import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation/index";
//import { initializeApp } from "firebase/app";

/*
const firebaseConfig = {
  apiKey: "AIzaSyDMyJS-zorGnprXCSwClEsy1UKX2IAz31g",
  authDomain: "mealstogo-8c501.firebaseapp.com",
  projectId: "mealstogo-8c501",
  storageBucket: "mealstogo-8c501.appspot.com",
  messagingSenderId: "810400728229",
  appId: "1:810400728229:web:435c6000d73bcd8a32b94c",
};

//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
*/

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
