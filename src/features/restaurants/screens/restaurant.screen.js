import React from "react";
import { Searchbar } from "react-native-paper";
import { View, SafeAreaView, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
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
