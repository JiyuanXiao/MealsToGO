import React from "react";
import stytled from "styled-components/native";
import { ScrollView } from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";

const FacouritesWarpper = stytled.View`
    padding: 10px;
`;
export const FavouritesBar = ({ favourites }) => {
  return (
    <FacouritesWarpper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <CompactRestaurantInfo restaurant={restaurant} />
            </Spacer>
          );
        })}
      </ScrollView>
    </FacouritesWarpper>
  );
};
