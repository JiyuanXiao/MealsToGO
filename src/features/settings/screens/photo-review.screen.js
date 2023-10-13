import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safr-area.component";
import {
  ProfilePhoto,
  PhotoControllBar,
} from "../components/photo-reviwe.styled";
import { CameraButton, SelectButton } from "../components/photo-reviwe.styled";

export const PhotoReviewScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [photoUri, setPhotoUri] = useState(null);

  const loadReviewPhoto = async (uid) => {
    setPhotoUri(await AsyncStorage.getItem(`${uid}-photo`));
  };

  const retakePhoto = () => {
    navigation.goBack();
  };

  const saveReviwePhoto = async () => {
    AsyncStorage.setItem(`${user.uid}-photo-reviewed`, photoUri);
    navigation.navigate("Back");
  };

  useEffect(() => {
    if (user) {
      loadReviewPhoto(user.uid);
    }
  }, [user]);

  return (
    <SafeArea>
      <ProfilePhoto source={{ uri: photoUri }} />
      <PhotoControllBar>
        <CameraButton onPress={retakePhoto} />
        <SelectButton onPress={saveReviwePhoto} />
      </PhotoControllBar>
    </SafeArea>
  );
};
