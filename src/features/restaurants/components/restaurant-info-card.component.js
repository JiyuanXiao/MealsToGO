import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 SomeRandom St",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};
