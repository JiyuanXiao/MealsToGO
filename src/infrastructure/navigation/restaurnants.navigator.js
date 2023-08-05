import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantSceen } from "../../features/restaurants/screens/restaurant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="RestaurantScreen"
        component={RestaurantSceen}
      />
    </RestaurantStack.Navigator>
  );
};
