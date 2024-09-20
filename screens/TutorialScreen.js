import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import { ScrollView } from "react-native";
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
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View>
          <View>
            <Text style={styles.foundationParent}>
              <Text style={styles.f}>F</Text>
              <Text style={styles.oundation}>oundation</Text>
            </Text>
            <Text style={styles.vinyasaParent}>
              <Text style={styles.vinyas}>of vinyas</Text>
              <Text style={styles.a}>a</Text>
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={styles.frameParent}>
              <Image
                style={styles.pose}
                source={require("@/assets/Photos/Pose01.png")}
              />
            </View>
          </View>

          <View style={styles.buttonParent}>
            <Image
              style={styles.sides}
              source={require("@/assets/Photos/Favourite.png")}
            />
            <Image
              style={styles.play}
              source={require("@/assets/Photos/PlayGreen.png")}
            />
            <Image
              style={styles.sides}
              source={require("@/assets/Photos/Share.png")}
            />
          </View>

          <View style={styles.durationParent}>
            <Image
              style={styles.timer}
              source={require("@/assets/Photos/Timer.png")}
            />
            <Text style={styles.text}>10 mins</Text>
          </View>
        </View>

        <View style={styles.intensityParent}>
          <Text style={styles.text}>Low intensity</Text>
        </View>

        <View style={styles.descriptionParent}>
          <Text style={styles.text}>
            Bring the heat from head to toe and get the heart pumping. Using
            actuve breath, flow through a series of simple sun salutations that
            provide beautiful length to your spine
          </Text>
        </View>

        <View style={styles.descriptionParent}>
          <Text style={styles.text}>
            Don’t have time right now? Schedule a session for later today.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#262628",
  },

  backButton: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#C6C3F2",
    borderWidth: 1,
    width: 110,
    height: 27,
    marginLeft: 145,
    marginTop: -50,
  },

  backText: {
    fontSize: 14,
    fontFamily: "Kodchasan-Bold",
    color: "#C6C3F2",
    textAlign: "center",
    marginTop: 4,
  },

  f: {
    fontSize: 80,
    letterSpacing: 4.3,
    fontFamily: "LuxuriousScript-Regular",
  },
  oundation: {
    fontSize: 32,
    letterSpacing: 1.2,
    fontFamily: "DelaGothicOne-Regular",
  },
  foundationParent: {
    textTransform: "uppercase",
    color: "#fff6ef",
    textAlign: "left",
    marginLeft: -50,
    marginBottom: -40,
    marginTop: 5,
    // backgroundColor: "red",
  },

  vinyas: {
    fontSize: 32,
    fontFamily: "DelaGothicOne-Regular",
  },
  a: {
    fontSize: 80,
    letterSpacing: 2.9,
    fontFamily: "LuxuriousScript-Regular",
  },
  vinyasaParent: {
    textTransform: "uppercase",
    color: "#fff6ef",
    textAlign: "right",
    marginRight: -40,
  },

  pose: {
    width: 225,
    height: 130,
    // backgroundColor: "red",
  },
  frameParent: {
    borderRadius: 200,
    borderColor: "#d6dc82",
    borderWidth: 15,
    // flex: 1,
    width: 280,
    height: 380,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
    paddingVertical: 13,
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    margin: 10,
  },

  buttonParent: {
    // backgroundColor: "blue",
    height: 80,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  play: {
    width: 80,
    height: 80,
    margin: 8,
  },
  sides: {
    width: 70,
    height: 70,
    margin: 8,
  },

  durationParent: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  timer: {
    width: 12,
    height: 13,
    margin: 3,
  },

  text: {
    fontSize: 16,
    // lineHeight: 21,
    fontFamily: "Kodchasan-Regular",
    color: "#fff6ef",
    marginLeft: 5,
    textAlign: "center",
  },

  intensityParent: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  descriptionParent: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginLeft: 35,
    marginRight: 35,
    paddingTop: 20,
  },
});

export default TutorialScreen;
