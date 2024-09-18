import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import ExerciseScreen from "./ExerciseScreen";
import ProfileScreen from "./ProfileScreen";
import CustomTabBar from "@/components/CustomTabBars/CustomTabBar";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    <AppDrawer navigation={navigation}>
      {/* <SafeAreaView style={{ height: "100%" }}> */}
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar (...props) /> }
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#262628",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            tabBarLabel: "Home",
          }}
        />

        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
            tabBarLabel: "Discover",
          }}
        />

        <Tab.Screen
          name="SettingsDrawer"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            tabBarLabel: "Profile",
          }}
        />
      </Tab.Navigator>
      {/* </SafeAreaView> */}
    </AppDrawer>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{ headerShown: false, animation: "fade" }}
      />
    </MainStacks.Navigator>
  );
};

// const ExploreScreen = () => {
//   return (
//     <ExploreStacks.Navigator>
//       <ExploreStacks.Screen name="Explore" component={DiscoverScreen} />
//     </ExploreStacks.Navigator>
//   );
// };

export default MainScreens;
