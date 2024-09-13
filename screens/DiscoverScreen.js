import { StyleSheet, View, Text, Pressable } from "react-native";
// import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.backgroundCont}>
      <View style={styles.rectangleParent}>
        <View style={styles.rectangleSearchParent}>
          <View style={[styles.rectangleSearch]} />
        </View>
        <View style={styles.searchParent}>
          <Text style={styles.search}>Search</Text>
        </View>
      </View>

      <Pressable style={styles.exercisePressable} onPress={() => {}} />

      <Pressable style={styles.challengePressable} onPress={() => {}} />

      <Pressable style={styles.sleepPressable} onPress={() => {}} />

      <Pressable style={styles.nutritionPressable} onPress={() => {}} />

      <Pressable style={styles.meditationPressable} onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundCont: {
    backgroundColor: "#262628",
  },
  rectangleSearchParent: {
    borderRadius: 10,
    borderStyle: "solid",
    backgroundColor: "#fff6ef",
    borderWidth: 1,
    borderColor: "#fff6ef",
    // flex: 1,
    width: "100%",
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleSearch: {
    borderRadius: 8,
    backgroundColor: "#262628",
    width: "80%",
    height: "100%",
  },
  searchParent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    fontSize: 10,
    fontFamily: "Kodchasan-Regular",
    color: "#fff6ef",
    textAlign: "center",
  },
  rectangleParent: {
    // width: "100%",
    position: "relative",
    margin: 20,
  },
  exerciseContainer: {
    width: "100%",
  },

  exercisePressable: {
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "100%",
    height: 58,
  },
  challengeContainer: {},

  challengePressable: {
    marginTop: 60,
    marginLeft: -30,
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "130%",
    height: 58,
    transform: [
      {
        rotate: "13deg",
      },
    ],
  },

  sleepPressable: {
    marginTop: 50,
    marginLeft: -0,
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "130%",
    height: 58,
    transform: [
      {
        rotate: "-3deg",
      },
    ],
  },

  nutritionPressable: {
    marginTop: 40,
    marginLeft: -30,
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "130%",
    height: 58,
    transform: [
      {
        rotate: "5deg",
      },
    ],
  },

  meditationPressable: {
    marginTop: 40,
    marginLeft: -30,
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "130%",
    height: 58,
    transform: [
      {
        rotate: "-5deg",
      },
    ],
  },
});

export default DiscoverScreen;
