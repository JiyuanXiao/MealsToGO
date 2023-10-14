import React, { useContext, useState } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { List, Avatar, Modal, Portal, PaperProvider } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safr-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const FavouritesIcon = (props) => (
  <List.Icon {...props} color="black" icon="heart" />
);

const LogoutIcon = (props) => (
  <List.Icon {...props} color="black" icon="door" />
);

const CameraIcon = (props) => (
  <List.Icon {...props} color="white" icon="camera" />
);

const AlbumsIcon = (props) => (
  <List.Icon {...props} color="white" icon="image" />
);

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const [visible, setVisible] = useState(false);
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "black",
    padding: 10,
  };

  const getProfilePhoto = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(
      `${currentUser.uid}-photo-reviewed`
    );
    setPhoto(photoUri);
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
      hideModal();
    }
  };

  const takePhoto = async () => {
    if (!cameraPermission.granted) {
      Alert.alert(
        "Access Permission Issue",
        "Please allow camera access in device settings",
        [
          {
            text: "Cancel",
            onPress: () => {
              return;
            },
            style: "cancel",
          },
          {
            text: "Ask Permission",
            onPress: requestCameraPermission,
          },
        ]
      );
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      AsyncStorage.setItem(`${user.uid}-photo-reviewed`, result.assets[0].uri);
      hideModal();
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
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <List.Section>
              <List.Subheader>Change Profile Photo</List.Subheader>
              <TouchableOpacity onPress={takePhoto}>
                <List.Item
                  title="Take Photo"
                  titleStyle={{ color: "white" }}
                  left={CameraIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={pickImage}>
                <List.Item
                  title="Choose From Albums"
                  titleStyle={{ color: "white" }}
                  left={AlbumsIcon}
                />
              </TouchableOpacity>
            </List.Section>
          </Modal>
        </Portal>

        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={FavouritesIcon}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingsItem title="Logout" left={LogoutIcon} onPress={onLogout} />
        </List.Section>
      </PaperProvider>
    </SafeArea>
  );
};
