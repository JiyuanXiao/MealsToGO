import React from "react";
import stytled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FacouritesWarpper = stytled(Card)`
    padding: 10px;
    z-index: 999;
    border-radius: 15px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FacouritesWarpper elevation={3}>
      <Spacer variant="left.large">
        <Text variant="caption">Favoutites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FacouritesWarpper>
  );
};
