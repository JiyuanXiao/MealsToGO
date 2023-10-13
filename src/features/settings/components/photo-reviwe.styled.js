import styled from "styled-components/native";
import { IconButton, MD3Colors } from "react-native-paper";

export const ProfilePhoto = styled.Image`
  width: 100%;
  height: 85%;
`;

export const PhotoControllBar = styled.View`
  width: 100%;
  height: 15%;
  background-color: black;
  flex-direction: row;
  align-items: center;
`;

export const CameraButton = styled(IconButton).attrs({
  icon: "camera",
  iconColor: MD3Colors.neutral50,
  size: 35,
})`
  flex: 1;
`;

export const SelectButton = styled(IconButton).attrs({
  icon: "check",
  iconColor: MD3Colors.neutral50,
  size: 35,
})`
  flex: 1;
`;
