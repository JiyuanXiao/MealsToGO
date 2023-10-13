import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
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

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const getProfilePhoto = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(
      `${currentUser.uid}-photo-reviewed`
    );
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePhoto(user);
  });

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
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

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={FavouritesIcon}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem title="Logout" left={LogoutIcon} onPress={onLogout} />
      </List.Section>
    </SafeArea>
  );
};
