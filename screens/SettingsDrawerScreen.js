import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        height: 100,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <Pressable
        style={styles.frameParent}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Image
          style={styles.setting}
          resizeMode="cover"
          source={require("@/assets/Photos/setting.png")}
        />
        <Text styles={{ color: "#fff" }}> hello </Text>
      </Pressable> */}
      <Pressable
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Ionicons name="menu" size={32} />
      </Pressable>
    </SafeAreaView>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sign Out"
        onPress={() => props.navigation.replace("SignIn")}
      />
    </DrawerContentScrollView>
  );
}

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const MyProfile = () => {
  return (
    <View>
      <Text>My Profile</Text>
    </View>
  );
};

const SettingsDrawerScreens = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ header: CustomDrawerHeader }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  // setting: {
  //   // backgroundColor: "yellow",
  //   width: 45,
  //   height: 45,
  // },
  // frameParent: {
  //   // backgroundColor: "blue",
  //   flex: 1,
  //   width: "100%",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

export default SettingsDrawerScreens;
