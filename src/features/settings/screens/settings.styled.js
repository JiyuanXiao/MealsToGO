import React from "react";
import styled from "styled-components/native";
import { List, Modal } from "react-native-paper";

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const ItemFavourites = styled(List.Item).attrs({
  title: "Favourites",
  description: "View your favourites",
  left: (props) => <List.Icon {...props} color="black" icon="heart-outline" />,
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const ItemLogout = styled(List.Item).attrs({
  title: "Logout",
  left: (props) => <List.Icon {...props} color="black" icon="door" />,
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const ItemCamera = styled(List.Item).attrs({
  title: "Take Photo",
  titleStyle: { color: "white" },
  left: (props) => <List.Icon {...props} color="white" icon="camera" />,
})``;

export const ItemAlbums = styled(List.Item).attrs({
  title: "Choose From Albums",
  titleStyle: { color: "white" },
  left: (props) => <List.Icon {...props} color="white" icon="image" />,
})``;

export const ProfilePhotoEditingModal = styled(Modal).attrs({
  contentContainerStyle: {
    backgroundColor: "black",
    padding: 10,
  },
})``;
