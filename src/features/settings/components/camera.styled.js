import styled from "styled-components/native";
import { IconButton, MD3Colors } from "react-native-paper";
import { Camera } from "expo-camera";

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 85%;
`;

export const ControllBar = styled.View`
  width: 100%;
  height: 15%;
  background-color: black;
  flex-direction: row;
  align-items: center;
`;

export const FlipCameraButton = styled(IconButton).attrs({
  icon: "camera-flip",
  iconColor: MD3Colors.neutral50,
  size: 35,
})`
  flex: 1;
`;

export const Shutter = styled(IconButton).attrs({
  icon: "circle-slice-8",
  iconColor: MD3Colors.neutral50,
  size: 50,
})`
  flex: 1;
`;

export const AccessPhotosButton = styled(IconButton).attrs({
  icon: "image",
  iconColor: MD3Colors.neutral50,
  size: 35,
})`
  flex: 1;
`;

export const PermissionInfoContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const WarningIcon = styled(IconButton).attrs({
  icon: "alert-circle",
  iconColor: MD3Colors.error50,
  size: 70,
})`
  width: 100%;
`;

export const PermissionWarning = styled.Text`
  text-align: center;
  font-size: 20px;
`;
