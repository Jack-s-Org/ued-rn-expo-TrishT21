import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const ExerciseScreen = ({ navigation }) => {
  const [exerciseOpen, setExerciseOpen] = useState(false);
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

      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.tutparent}>
          <Pressable
            onPress={() => {
              setExerciseOpen(!exerciseOpen);
            }}
          >
            <View style={styles.yogaTut}>
              {exerciseOpen ? (
                <View style={styles.yogaTutOpen}>
                  <Image
                    source={require("@/assets/Photos/Hatha.png")}
                    style={styles.tutImageOpen}
                  />
                  <Image
                    source={require("@/assets/Photos/PlayExercise.png")}
                    style={styles.tutPlayOpen}
                  />
                  <View style={{ margin: 25, marginTop: -55 }}>
                    <Text style={styles.tutTextOpen}>Hatha Yoga</Text>
                    <Text style={styles.subTutTextOpen}>Intermidiate</Text>
                    <Text style={styles.subTutTextOpen}>15 mins</Text>
                    <Text style={styles.tutDescription}>
                      Hatha yoga is a physical and spiritual practice that
                      focuses on balancing the body and mind through postures
                      (asanas), breath control (pranayama), and meditation. It's
                      accessible to beginners and emphasizes holding poses to
                      build strength, flexibility, and mental clarity, promoting
                      overall well-being.
                    </Text>
                  </View>
                </View>
              ) : (
                <>
                  <Image
                    source={require("@/assets/Photos/Hatha.png")}
                    style={styles.tutImage}
                  />
                  <Text style={styles.tutText}>Hatha Yoga</Text>
                </>
              )}
            </View>
          </Pressable>
        </View>

        <View style={styles.tutparent}>
          <View style={styles.yogaTut}>
            <Image
              source={require("@/assets/Photos/FullBody.png")}
              style={styles.tutImage}
            />
            <Text style={styles.tutText}>Full Body Stretch</Text>
          </View>
        </View>

        <View style={styles.tutparent}>
          <View style={styles.yogaTut}>
            <Image
              source={require("@/assets/Photos/Power.png")}
              style={styles.tutImage}
            />
            <Text style={styles.tutText}>Power Yoga</Text>
          </View>
        </View>

        <View style={styles.tutparent}>
          <View style={styles.yogaTut}>
            <Image
              source={require("@/assets/Photos/5min.png")}
              style={styles.tutImage}
            />
            <Text style={styles.tutText}>5 minutes Warmup</Text>
          </View>
        </View>

        <View style={styles.tutparent}>
          <View style={styles.yogaTut}>
            <Image
              source={require("@/assets/Photos/Iyengar.png")}
              style={styles.tutImage}
            />
            <Text style={styles.tutText}>Iyengar Yoga</Text>
          </View>
        </View>
      </ScrollView>
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
  tutparent: {
    // backgroundColor: "red",
    marginBottom: 5,
  },
  yogaTut: {
    backgroundColor: "#c6c3f2",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  tutImage: {
    width: 124,
    height: 122,
    margin: 20,
  },
  tutText: {
    fontSize: 16,
    fontFamily: "DelaGothic",
    color: "#fff6ef",
    textAlign: "center",
    textTransform: "uppercase",
    // backgroundColor: "red",
    flexWrap: "wrap",
    flex: 1,
    // width: "100%",
  },
  yogaTutOpen: {
    backgroundColor: "#c6c3f2",
    borderStyle: "solid",
    borderColor: "#fff6ef",
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    alignItems: "center",
  },
  tutImageOpen: {
    width: 124,
    height: 122,
    marginTop: 15,
    // backgroundColor: "blue",
  },

  tutPlayOpen: {
    width: 64,
    height: 64,
    // backgroundColor: "blue",
    marginLeft: 200,
  },

  tutTextOpen: {
    fontSize: 16,
    fontFamily: "DelaGothic",
    color: "#fff6ef",
    textAlign: "left",
    textTransform: "uppercase",
    // backgroundColor: "red",
  },
  subTutTextOpen: {
    fontSize: 14,
    fontFamily: "Kodchasan-Bold",
    color: "#fff6ef",
    paddingTop: 8,
  },

  tutDescription: {
    fontSize: 14,
    fontFamily: "Koschasen-Regular",
    color: "#fff6ef",
    paddingTop: 8,
  },
});

export default ExerciseScreen;
