import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsNavigator } from "./restaurnants.navigator";
import { SettingsNavigator } from "./settings.navigator";

import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextSProvider } from "../../services/location/location.context";
import { RestaurantsConextProvider } from "../../services/restaurants/restaurants.context";
import { colors } from "../theme/colors";

const TAB_ICON = {
  Restaurants: "restaurant",
  Settings: "settings",
  Map: "map",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.muted,
    headerShown: false,
  };
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextSProvider>
        <RestaurantsConextProvider>
          <MyTabs />
        </RestaurantsConextProvider>
      </LocationContextSProvider>
    </FavouritesContextProvider>
  );
};
