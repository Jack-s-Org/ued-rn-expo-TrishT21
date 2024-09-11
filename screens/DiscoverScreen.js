import { StyleSheet, View, Text } from "react-native";
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

      <View styles={styles.tapeContainer}>
        <View styles={styles.tape}></View>
      </View>
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
  tapeContainer: {
    position: "relative",
  },
  tape: {
    width: "100%",
    borderRadius: 10,
    borderStyle: "Solid",
  },
});

export default DiscoverScreen;
