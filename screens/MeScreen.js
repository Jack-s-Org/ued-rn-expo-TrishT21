import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MeScreen = () => {
  return (
    <SafeAreaView style={styles.profileContainer}>
      <Text style={styles.profileText}>Profile</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262628",
  },

  profileText: {
    fontSize: 34,
    textTransform: "uppercase",
    fontFamily: "DelaGothicOne-Regular",
    color: "#d96073",
    textAlign: "left",
  },
});

export default MeScreen;
