import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwipeableCarouselParallaxHorizontal from "@/components/SwipeableCarousel/SwipeableCarouselParallaxHorizontal";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.backgroundCont}>
      <View style={[styles.mainContainer]}>
        <Text style={styles.header}>BEGINNER</Text>
        <Text style={styles.header}>PROGRAMME</Text>

        <Text style={styles.textContainer}>
          <Text style={styles.secBold}>Hi User, </Text>
          <Text style={styles.secText}>
            follow up on your Beginner Program to learn all the important basics
            to get started.
          </Text>
        </Text>

        <Text style={styles.subHeader}>Beginner Program Progress</Text>

        <View style={styles.parentProgressBar}>
          <View style={styles.progressBarBorder}>
            <View style={styles.progressBar} />
          </View>

          <View style={styles.parentPercentage}>
            <Text style={styles.progressPercentage}>0%</Text>
          </View>
        </View>
      </View>
      <SwipeableCarouselParallaxHorizontal />
      <Pressable
        style={styles.durationParent}
        onPress={() => {
          navigation.navigate("Tutorial");
        }}
      >
        <Text style={styles.duration}>10 mins</Text>
      </Pressable>
      <View style={styles.headerTwoParent}>
        <Text style={styles.headerTwo}>how are you feeling</Text>
        <View style={styles.borderBorder}>
          <View style={styles.borderMood}>
            <Image
              source={require("@/assets/Photos/Mood.png")}
              style={styles.mood}
            />
            <Text style={styles.subTextTwo}>Mood</Text>
          </View>
          <View style={styles.borderMood}>
            <Image
              source={require("@/assets/Photos/Energy.png")}
              style={styles.energy}
            />
            <Text style={styles.subTextTwo}>Energy</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundCont: {
    backgroundColor: "#262628",
  },
  mainContainer: {
    margin: 18,
    marginTop: -55,
    alignItems: "flex-start",
    alighContent: "flex-start",
    // justifyContent: "center",
    backgroundColor: "#D96073",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#FFF6EF",
    // width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 0.5,
  },
  header: {
    fontSize: 30,
    textTransform: "uppercase",
    fontFamily: "DelaGothic",
    color: "#fff6ef",
    textAlign: "left",
  },

  secBold: {
    fontWeight: "700",
    fontFamily: "KodBold",
  },
  secText: {
    fontFamily: "KodRegular",
  },
  textContainer: {
    fontSize: 12,
    lineHeight: 18,
    color: "#fff6ef",
    textAlign: "left",
    width: 326,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "KodBold",
    color: "#fff6ef",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 20,
  },
  parentProgressBar: {
    width: "100%",
    position: "relative",
  },
  progressBarBorder: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderWidth: 1,
    // flex: 1,
    width: "100%",
    height: 28,
  },
  progressBar: {
    borderRadius: 8,
    backgroundColor: "#fff6ef",
    width: "10%",
    height: "100%",
  },
  parentPercentage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
  },
  progressPercentage: {
    fontSize: 10,
    fontFamily: "KodRegular",
    color: "#fff6ef",
    textAlign: "center",
  },
  durationParent: {
    borderRadius: 10,
    backgroundColor: "#d96073",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderWidth: 1,
    // flex: 1,
    width: 80,
    height: 34,
    overflow: "hidden",
    marginTop: -20,
    marginLeft: 160,
  },
  duration: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "DelaGothicOne-Regular",
    color: "#fff6ef",
    textAlign: "center",
    marginTop: 7,
  },
  headerTwo: {
    fontSize: 18,
    textTransform: "uppercase",
    fontFamily: "DelaGothic",
    color: "#fff6ef",
    textAlign: "left",
    margin: 10,
    paddingBottom: 5,
  },
  headerTwoParent: {
    // backgroundColor: "blue",
    width: "100%",
    height: "100%",
    padding: 16,
  },
  borderBorder: {
    flexDirection: "row",
  },
  borderMood: {
    borderRadius: 10,
    // backgroundColor: "#262628",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderWidth: 1,
    // flex: 1,
    width: 112,
    height: 135,
    // opacity: 0.5,
    margin: 15,
    marginLeft: 5,
  },
  borderEnergy: {
    borderRadius: 10,
    // backgroundColor: "#262628",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderWidth: 1,
    // flex: 1,
    width: 112,
    height: 120,
    // opacity: 0.5,
    margin: 10,
  },
  mood: {
    borderRadius: 1,
    width: 56,
    height: 56,
    margin: 25,
    marginTop: 25,
  },
  energy: {
    borderRadius: 1,
    width: 56,
    height: 56,
    margin: 25,
    marginTop: 25,
  },
  subTextTwo: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "KodBold",
    color: "#fff6ef",
    textAlign: "center",
    marginTop: -6,
  },
});

export default HomeScreen;
