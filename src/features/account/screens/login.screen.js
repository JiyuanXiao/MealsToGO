import React from "react";
import { View, Text } from "react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";

export const LoginScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Text>Login Screen</Text>
      </AccountContainer>
    </AccountBackground>
  );
};
