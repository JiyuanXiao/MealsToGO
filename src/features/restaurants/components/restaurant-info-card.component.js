import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Section,
  Open,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 SomeRandom St",
    isOpenNow = true,
    rating = 4,
    businessStatus = "CLOSED_TEMPORARILY",
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={2}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <Open>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            {businessStatus === "CLOSED_TEMPORARILY" && (
              <Text variant="error"> TEMPORARY CLOSED</Text>
            )}
          </Open>
          <Spacer position="left" size="large">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
