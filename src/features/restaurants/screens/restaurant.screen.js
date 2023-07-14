import React from "react";
import { Searchbar } from "react-native-paper";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchBarContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  background-color: blue;
  padding: 16px;
`;

export const RestaurantSceen = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
