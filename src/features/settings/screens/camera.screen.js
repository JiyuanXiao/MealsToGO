import React, { useRef, useState, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native";
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

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      AsyncStorage.setItem(`${user.uid}-photo-reviewed`, result.assets[0].uri);
      navigation.navigate("Back");
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      AsyncStorage.setItem(`${user.uid}-photo-reviewed`, result.assets[0].uri);
      navigation.navigate("Back");
    }
  };

  return (
    <SafeArea>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
      />
      <ControllBar>
        <AccessPhotosButton onPress={pickImage} />
        <Shutter onPress={snap} />
        <FlipCameraButton onPress={toggleCameraType} />
      </ControllBar>
    </SafeArea>
  );
};
