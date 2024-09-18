import { StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TutorialScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262628",
  },

  backText: {
    fontSize: 14,
    fontFamily: "Kodchasan-Bold",
    color: "#d96073",
    textAlign: "center",
    marginTop: 4,
  },
});

export default TutorialScreen;
