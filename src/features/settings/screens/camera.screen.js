import React, { useRef, useState, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeArea } from "../../../components/utility/safr-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  ProfileCamera,
  ControllBar,
  Shutter,
  AccessPhotosButton,
  FlipCameraButton,
  WarningIcon,
  PermissionWarning,
  PermissionInfoContainer,
} from "../components/camera.styled";

export const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  if (!permission) {
    return (
      <PermissionInfoContainer>
        <WarningIcon />
        <PermissionWarning>Permission Error</PermissionWarning>
      </PermissionInfoContainer>
    );
  }

  if (!permission.granted) {
    return (
      <PermissionInfoContainer>
        <WarningIcon />
        <PermissionWarning>No Camera Access Permission</PermissionWarning>
        <Button onPress={requestPermission} title="Grant Permission" />
      </PermissionInfoContainer>
    );
  }

  const toggleCameraType = () => {
    setType((current) => {
      return current === CameraType.back ? CameraType.front : CameraType.back;
    });
  };

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.navigate("PhotoReview");
    }
  };

  return (
    <SafeArea>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
      />
      <ControllBar>
        <AccessPhotosButton onPress={() => null} />
        <Shutter onPress={snap} />
        <FlipCameraButton onPress={toggleCameraType} />
      </ControllBar>
    </SafeArea>
  );
};
