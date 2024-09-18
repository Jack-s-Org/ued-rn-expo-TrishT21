import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ExerciseScreen = ({ navigation }) => {
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

      <View>
        <View style={styles.exerciseParent}>
          <Image
            source={require("@/assets/Photos/Star 1.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Exercise</Text>
          <Image
            source={require("@/assets/Photos/Star 1.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Exercise</Text>
          <Image
            source={require("@/assets/Photos/Star 1.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Exercise</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundCont: {
    backgroundColor: "#262628",
  },
  backButton: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#d96073",
    borderWidth: 1,
    width: 110,
    height: 27,
    marginLeft: 145,
    marginTop: -50,
  },

  backText: {
    fontSize: 14,
    fontFamily: "Kodchasan-Bold",
    color: "#d96073",
    textAlign: "center",
    marginTop: 4,
  },

  exerciseParent: {
    // backgroundColor: "red",
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "100%",
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },

  text: {
    fontSize: 16,
    fontFamily: "DelaGothic",
    color: "#fff6ef",
    textAlign: "center",
    textTransform: "uppercase",
  },

  star: {
    borderRadius: 1,
    width: 20,
    height: 20,
    margin: 10,
  },
});

export default ExerciseScreen;
