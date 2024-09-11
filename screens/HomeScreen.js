import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import SwipeableCarouselParallaxHorizontal from "@/components/SwipeableCarousel/SwipeableCarouselParallaxHorizontal";

const HomeScreen = () => {
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundCont: {
    backgroundColor: "#262628",
  },
  mainContainer: {
    margin: 18,
    marginTop: -18,
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
});

export default HomeScreen;
