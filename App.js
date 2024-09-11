import React from "react";
import { View, Image, StyleSheet } from "react-native";
import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "./components/VideoPlayer";
import { StatusBar } from "expo-status-bar";

const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/selection.json"),
  "IcoMoon",
  "PacMan.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    DelaGothic: require("@/assets/Fonts/DelaGothicOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%", backgroundColor: "#262628" }}>
        {/* <Icon name="pacman" size={50} color="blue" /> */}
        <RootNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
