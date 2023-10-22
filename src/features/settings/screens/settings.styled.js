import React from "react";
import styled from "styled-components/native";
import { List, Modal } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safr-area.component";
import { colors } from "../../../infrastructure/theme/colors";

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const ItemFavourites = styled(List.Item).attrs({
  title: "Favourites",
  description: "View your favourites",
  left: (props) => (
    <List.Icon {...props} color={colors.ui.error} icon="heart" />
  ),
})`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;

export const ItemLogout = styled(List.Item).attrs({
  title: "Logout",
  left: (props) => (
    <List.Icon {...props} color={colors.ui.secondary} icon="door" />
  ),
})`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
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

export const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;
