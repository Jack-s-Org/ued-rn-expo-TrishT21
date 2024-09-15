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

      {/* <View>
          <Pressable style={styles.exercisePressable} onPress={() => {}} />
        </View> */}
      <View style={styles.sectionParent}>
        <View style={styles.exerciseParent}>
          <Text style={styles.text}>Exercise</Text>
          <Text style={styles.text}>Exercise</Text>
          <Text style={styles.text}>Exercise</Text>
        </View>

        <View style={styles.challengeParent}>
          <Text style={styles.text}>Challenge</Text>
        </View>

        <View style={styles.sleepParent}>
          <Text style={styles.text}>Sleep</Text>
        </View>

        <View style={styles.nutritionParent}>
          <Text style={styles.text}>Nutrition</Text>
        </View>

        <View style={styles.meditationParent}>
          <Text style={styles.text}>Meditation</Text>
        </View>
      </View>

      {/* <View>
        <Pressable style={styles.challengePressable} onPress={() => {}} />
      </View>

      <View>
        <Pressable style={styles.sleepPressable} onPress={() => {}} />
      </View>

      <View>
        <Pressable style={styles.nutritionPressable} onPress={() => {}} />
      </View>

      <View>
        <Pressable style={styles.meditationPressable} onPress={() => {}} />
      </View> */}
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
  },

  text: {
    fontSize: 16,
    fontFamily: "DelaGothic",
    color: "#fff6ef",
    textAlign: "center",
  },

  challengeParent: {
    marginTop: 60,
    marginLeft: -60,
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "130%",
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        rotate: "13deg",
      },
    ],
  },

  sleepParent: {
    marginTop: 60,
    marginLeft: -60,
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "130%",
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        rotate: "-3deg",
      },
    ],
  },

  nutritionParent: {
    marginTop: 40,
    marginLeft: -55,
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "130%",
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        rotate: "5deg",
      },
    ],
  },

  meditationParent: {
    marginTop: 40,
    marginLeft: -60,
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // flex: 1,
    width: "130%",
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        rotate: "-5deg",
      },
    ],
  },

  // exercisePressable: {
  //   backgroundColor: "#d96073",
  //   borderStyle: "solid",
  //   borderColor: "#fff6ef",
  //   borderTopWidth: 1,
  //   borderBottomWidth: 1,
  //   // flex: 1,
  //   width: "100%",
  //   height: 58,
  // },

  // challengePressable: {
  //   marginTop: 60,
  //   marginLeft: -30,
  //   backgroundColor: "#d96073",
  //   borderStyle: "solid",
  //   borderColor: "#fff6ef",
  //   borderTopWidth: 1,
  //   borderBottomWidth: 1,
  //   // flex: 1,
  //   width: "130%",
  //   height: 58,
  //   transform: [
  //     {
  //       rotate: "13deg",
  //     },
  //   ],
  // },

  // sleepPressable: {
  //   marginTop: 50,
  //   marginLeft: -0,
  //   backgroundColor: "#d96073",
  //   borderStyle: "solid",
  //   borderColor: "#fff6ef",
  //   borderTopWidth: 1,
  //   borderBottomWidth: 1,
  //   // flex: 1,
  //   width: "130%",
  //   height: 58,
  //   transform: [
  //     {
  //       rotate: "-3deg",
  //     },
  //   ],
  // },

  // nutritionPressable: {
  //   marginTop: 40,
  //   marginLeft: -30,
  //   backgroundColor: "#d96073",
  //   borderStyle: "solid",
  //   borderColor: "#fff6ef",
  //   borderTopWidth: 1,
  //   borderBottomWidth: 1,
  //   // flex: 1,
  //   width: "130%",
  //   height: 58,
  //   transform: [
  //     {
  //       rotate: "5deg",
  //     },
  //   ],
  // },

  // meditationPressable: {
  //   marginTop: 40,
  //   marginLeft: -30,
  //   backgroundColor: "#d96073",
  //   borderStyle: "solid",
  //   borderColor: "#fff6ef",
  //   borderTopWidth: 1,
  //   borderBottomWidth: 1,
  //   // flex: 1,
  //   width: "130%",
  //   height: 58,
  //   transform: [
  //     {
  //       rotate: "-5deg",
  //     },
  //   ],
  // },
});

export default DiscoverScreen;
