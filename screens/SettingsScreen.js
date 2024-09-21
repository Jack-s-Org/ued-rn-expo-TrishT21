import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.backgroundCont}>
      <Pressable
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.backText}>Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundCont: {
    backgroundColor: "#D96073",
    flex: 1,
  },

  backButton: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#C6C3F2",
    borderWidth: 1,
    width: 110,
    height: 27,
    marginLeft: 145,
    marginTop: -30,
  },

  backText: {
    fontSize: 14,
    fontFamily: "Kodchasan-Bold",
    color: "#C6C3F2",
    textAlign: "center",
    marginTop: 4,
  },
});

export default SettingsScreen;
