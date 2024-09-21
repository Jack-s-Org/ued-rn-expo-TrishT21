import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { SafeAreaView } from "react-native-safe-area-context";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import ExerciseScreen from "./ExerciseScreen";
import ProfileScreen from "./ProfileScreen";
import CustomTabBar from "@/components/CustomTabBars/CustomTabBar";
import TutorialScreen from "./TutorialScreen";
import VinyasaScreen from "./VinyasaScreen";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const TutorialStack = createNativeStackNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    <AppDrawer navigation={navigation}>
      {/* <SafeAreaView style={{ height: "100%" }}> */}
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#fff6ef",
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
            tabBarInactiveTintColor: "#BF4A5D",
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
            tabBarInactiveTintColor: "#D96073",
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            tabBarLabel: "Profile",
            tabBarInactiveTintColor: "#D96073",
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
        options={{ animation: "slide_from_left", headerShown: false }}
      />
      <MainStacks.Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{ headerShown: false, animation: "fade" }}
      />
      <MainStacks.Screen
        name="Tutorial"
        component={TutorialScreen}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
      {/* <MainStacks.Screen
        name="Vinyasa"
        component={VinyasaScreen}
        // options={{ headerShown: false, animation: "slide_from_left" }}
      /> */}
    </MainStacks.Navigator>
  );
};

// const TutorialScreens = () => {
//   return (
//     <TutorialStacks.Navigator>
//       <TutorialStacks.Screen name="Vinyasa" component={VinyasaScreen} />
//     </TutorialStacks.Navigator>
//   );
// };

export default MainScreens;
