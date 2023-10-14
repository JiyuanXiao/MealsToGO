import React, { useContext, useState } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { List, Avatar, Portal, PaperProvider } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { SafeArea } from "../../../components/utility/safr-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import {
  AvatarContainer,
  ItemAlbums,
  ItemFavourites,
  ItemCamera,
  ItemLogout,
  ProfilePhotoEditingModal,
} from "./settings.styled";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const [visible, setVisible] = useState(false);
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const getProfilePhoto = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      AsyncStorage.setItem(`${user.uid}-photo`, result.assets[0].uri);
      hideModal;
    }
  };

  const launchCameraAndSaveImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      AsyncStorage.setItem(`${user.uid}-photo`, result.assets[0].uri);
      hideModal;
    }
  };

  const getCameraPermission = async () => {
    requestCameraPermission().then((p) => {
      if (!p.granted) {
        Alert.alert(
          "Camera Access Issue",
          "Unable to grant camera access permission. Please allow camera access in device settings manually."
        );
      } else {
        launchCameraAndSaveImage();
      }
    });
  };

  const takePhoto = async () => {
    if (!cameraPermission) {
      Alert.alert(
        "Camera Access Issue",
        "Cannot get camera permission status."
      );
    } else if (!cameraPermission.granted) {
      Alert.alert(
        "Camera Access Issue",
        "Please click 'Get Permission' to grant camera access permission.",
        [
          {
            text: "Cancel",
            onPress: () => {
              return;
            },
            style: "cancel",
          },
          {
            text: "Get Permission",
            onPress: getCameraPermission,
          },
        ]
      );
    } else {
      launchCameraAndSaveImage();
    }
  };

  useFocusEffect(() => {
    getProfilePhoto(user);
  });

  return (
    <SafeArea>
      <PaperProvider>
        <AvatarContainer>
          <TouchableOpacity onPress={showModal}>
            {photo ? (
              <Avatar.Image size={180} source={{ uri: photo }} />
            ) : (
              <Avatar.Icon size={180} icon="human" backgorundColor="#2182BD" />
            )}
            <Spacer postion="top" size="large">
              <Text variant="label">{user.email}</Text>
            </Spacer>
          </TouchableOpacity>
        </AvatarContainer>
        <Portal>
          <ProfilePhotoEditingModal visible={visible} onDismiss={hideModal}>
            <List.Section>
              <List.Subheader>Change Profile Photo</List.Subheader>
              <TouchableOpacity onPress={takePhoto}>
                <ItemCamera />
              </TouchableOpacity>
              <TouchableOpacity onPress={pickImage}>
                <ItemAlbums />
              </TouchableOpacity>
            </List.Section>
          </ProfilePhotoEditingModal>
        </Portal>

        <List.Section>
          <ItemFavourites onPress={() => navigation.navigate("Favourites")} />
          <ItemLogout onPress={onLogout} />
        </List.Section>
      </PaperProvider>
    </SafeArea>
  );
};
