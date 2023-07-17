import React, { useContext } from "react";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsConext } from "../../../services/restaurants/restaurants.context";

const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantSceen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsConext);
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="tomato" />
        </LoadingContainer>
      )}
      <SearchBarContainer>
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
