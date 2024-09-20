import { StyleSheet, View, Text, Pressable, Image } from "react-native";
// import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const DiscoverScreen = ({ navigation }) => {
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
      <View style={{ shadowRadius: 5, elevation: 5, shadowOpacity: 0.5 }}>
        <Pressable
          style={styles.exerciseParent}
          onPress={() => {
            navigation.navigate("Exercise");
          }}
        >
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Exercise</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Exercise</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Exercise</Text>
        </Pressable>

        <View style={styles.challengeParent}>
          <Text style={styles.text}>Challenge</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Challenge</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Challenge</Text>
        </View>

        <View style={styles.sleepParent}>
          <Text style={styles.text}>Sleep</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Sleep</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Sleep</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Sleep</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
        </View>

        <View style={styles.nutritionParent}>
          <Text style={styles.text}>Nutrition</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Nutrition</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Nutrition</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
        </View>

        <View style={styles.meditationParent}>
          <Text style={styles.text}>Meditation</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Meditation</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
          <Text style={styles.text}>Meditation</Text>
          <Image
            source={require("@/assets/Photos/Star01.png")}
            style={styles.star}
          />
        </View>

        <View style={styles.exploreTextparent}>
          <Text style={styles.exploreText}>Explore</Text>
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
    flex: 1,
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
    margin: 30,
    marginTop: -25,
  },

  exerciseParent: {
    // backgroundColor: "blue",
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
    width: 25,
    height: 25,
    margin: 10,
    // backgroundColor: "red",
  },

  challengeParent: {
    marginTop: 70,
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
    flexDirection: "row",
    transform: [
      {
        rotate: "13deg",
      },
    ],
  },

  sleepParent: {
    marginTop: 55,
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
    flexDirection: "row",
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
    flexDirection: "row",
    transform: [
      {
        rotate: "5deg",
      },
    ],
  },

  meditationParent: {
    marginTop: 50,
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
    flexDirection: "row",
    transform: [
      {
        rotate: "-5deg",
      },
    ],
  },

  exploreTextparent: {
    marginTop: 70,
    margin: 35,
  },

  exploreText: {
    fontSize: 30,
    fontFamily: "DelaGothic",
    color: "#fff6ef",
    // textAlign: "left",
    textTransform: "uppercase",
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
