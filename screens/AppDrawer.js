import { useState } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerItem } from "@react-navigation/drawer";

export default function AppDrawer({ navigation, children }) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <SafeAreaView>
            <DrawerItem
              label="Settings"
              onPress={() => {
                navigation.navigate("Settings");
              }}
            />
            <DrawerItem
              label="Sign Out"
              onPress={() => {
                navigation.replace("SignIn");
              }}
            />
          </SafeAreaView>
        );
      }}
    >
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}
            style={{
              // backgroundColor: "red",
              zIndex: 99,
              position: "absolute",
              left: 0,
              // top: insets.top,
              bottom: insets.bottom,
              padding: 30,
              paddingBottom: -80,
            }}
          >
            <Image
              style={styles.setting}
              source={require("@/assets/Photos/setting.png")}
            />
          </TouchableOpacity>
        )}
      </SafeAreaInsetsContext.Consumer>
      {children}
    </Drawer>
  );
}

const styles = StyleSheet.create({
  setting: {
    // backgroundColor: "blue",
    // flex: 1,
    width: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
