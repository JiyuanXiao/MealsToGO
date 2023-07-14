import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantSceen } from "./src/features/restaurants/screens/restaurant.screen";

export default function App() {
  return (
    <>
      <RestaurantSceen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
