import React from "react";
import { View, Text } from "react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";

export const RegisterScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Text>Register Screen</Text>
      </AccountContainer>
    </AccountBackground>
  );
};
