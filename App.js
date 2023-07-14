import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text style={styles.text}>search</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 },

  search: {
    backgroundColor: "green",
  },

  list: {
    flex: 1,
    backgroundColor: "blue",
  },

  text: {
    padding: 16,
  },
});
