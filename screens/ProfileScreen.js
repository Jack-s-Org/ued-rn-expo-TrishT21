import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.profileContainer}>
      <View style={styles.proflileParent}>
        <Text style={styles.profileText}>Profile</Text>
      </View>

      <View style={styles.rectParent}>
        <View style={styles.rowOne}>
          <View style={styles.profileRect}>
            <Image
              source={require("@/assets/Photos/ProfileIcon.png")}
              style={styles.profileIcon}
            />
          </View>
          <View style={styles.usernameRect}>
            <View style={styles.nameParent}>
              <Text style={styles.title}>Name</Text>
              <Text style={styles.answer}>Pistacho Nut</Text>
            </View>
            <View style={styles.dobParent}>
              <Text style={styles.titleDOB}>Date of Birth</Text>
              <Text style={styles.answerDOB}>21 April 2001</Text>
            </View>
          </View>
        </View>

        <View style={styles.rowTwo}>
          <View style={styles.streakRect}>
            <View style={styles.streakParent}>
              <View style={styles.currentStreakParent}>
                <Text style={styles.currentStreak}>Current Streak</Text>
                <Text style={styles.day}>1 Day</Text>
              </View>
              <View style={styles.longstreakParent}>
                <Text style={styles.longestStreak}>Longest Streak</Text>
                <Text style={styles.day}>3 Day</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.rowThree}>
          <View style={styles.historyRect}>
            <View style={styles.historyParent}>
              <Text style={styles.exerciseHistory}>Exercise History</Text>
              <Text style={styles.text}>{`>>>`}</Text>
            </View>
          </View>
        </View>

        <View style={styles.rowFour}>
          <View style={styles.playbackRect}>
            <View>
              <Text style={styles.playbackText}>Playback</Text>
            </View>
            <View style={styles.playbackParent}>
              <View style={{ margin: 5 }}>
                <Image
                  source={require("@/assets/Photos/playback01.png")}
                  style={styles.playback}
                />
              </View>
              <View style={{ margin: 5 }}>
                <Image
                  source={require("@/assets/Photos/playback02.png")}
                  style={styles.playback}
                />
              </View>
            </View>
          </View>
          <View style={styles.personalizationRect}></View>
          <View style={styles.extraRect}>
            <Text style={styles.personalisation}>Personalisation</Text>
          </View>
        </View>

        <View
          style={{
            // backgroundColor: "red",
            height: 80,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.frameParent}>
            <Image
              style={styles.setting}
              resizeMode="cover"
              source={require("@/assets/Photos/setting.png")}
            />
          </View>

          <Pressable style={styles.logOutParent} onPress={() => {}}>
            <Text style={styles.logOut}>Log Out</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262628",
    marginTop: -1,
  },

  proflileParent: {
    // backgroundColor: "red",
    padding: 10,
  },

  profileText: {
    fontSize: 34,
    textTransform: "uppercase",
    fontFamily: "DelaGothicOne-Regular",
    color: "#d96073",
    textAlign: "left",
  },

  rectParent: {
    margin: 15,
  },

  rowOne: {
    // backgroundColor: "red",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },

  profileRect: {
    borderRadius: 10,
    backgroundColor: "#d6dc82",
    borderStyle: "solid",
    borderColor: "#b9b5e9",
    borderWidth: 5,
    // flex: 1,
    width: 110,
    height: 130,
    marginRight: 10,
    // alignContent: "center",
    justifyContent: "center",
    padding: 10,
  },

  profileIcon: {
    // backgroundColor: "red",
    width: 79.43,
    height: 71,
  },

  usernameRect: {
    borderRadius: 10,
    backgroundColor: "#d6dc82",
    flex: 1,
    width: "100%",
    height: 133,
    marginLeft: 10,
    // alignItems: "center",
    justifyContent: "center",
  },

  nameParent: {
    // backgroundColor: "red",
    width: 80,
    margin: 10,
    marginLeft: 20,
  },

  title: {
    fontSize: 12,
    fontFamily: "DelaGothicOne-Regular",
    color: "#d96073",
  },

  titleDOB: {
    fontSize: 12,
    fontFamily: "DelaGothicOne-Regular",
    color: "#d96073",
    textAlign: "right",
  },

  dobParent: {
    width: 90,
    margin: 10,
    marginLeft: 80,
  },

  answer: {
    fontSize: 14,
    fontFamily: "Kodchasan-Regular",
    color: "#d96073",
  },

  answerDOB: {
    fontSize: 14,
    fontFamily: "Kodchasan-Regular",
    color: "#d96073",
    textAlign: "right",
  },
  rowTwo: {
    // backgroundColor: "blue",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },

  streakRect: {
    borderRadius: 10,
    backgroundColor: "#d6dc82",
    flex: 1,
    width: "100%",
    height: 90,
  },

  streakParent: {
    // backgroundColor: "blue",
    width: 250,
    height: 50,
    marginTop: 20,
    marginLeft: 30,
    flexDirection: "row",
  },

  currentStreakParent: {
    // backgroundColor: "red",
    marginRight: 30,
  },
  currentStreak: {
    fontSize: 12,
    fontFamily: "DelaGothicOne-Regular",
    color: "#d96073",
    textAlign: "center",
  },

  longstreakParent: {
    // backgroundColor: "red",
    marginLeft: 30,
  },

  longestStreak: {
    fontSize: 12,
    fontFamily: "DelaGothicOne-Regular",
    color: "#d96073",
    textAlign: "center",
  },

  day: {
    fontSize: 14,
    fontFamily: "Kodchasan-Regular",
    color: "#d96073",
    textAlign: "center",
    paddingTop: 15,
  },

  rowThree: {
    // backgroundColor: "blue",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },

  historyParent: {
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 30,
  },
  historyRect: {
    borderRadius: 10,
    backgroundColor: "#d6dc82",
    flex: 1,
    width: "100%",
    height: 90,
  },

  exerciseHistory: {
    fontSize: 12,
    fontFamily: "DelaGothicOne-Regular",
    color: "#d96073",
    textAlign: "left",
  },

  text: {
    fontSize: 14,
    fontFamily: "Kodchasan-Regular",
    color: "#d96073",
    marginLeft: 125,
  },

  rowFour: {
    // backgroundColor: "blue",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    margin: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },

  playbackRect: {
    borderRadius: 10,
    backgroundColor: "#d6dc82",
    // flex: 1,
    width: 110,
    height: 180,
    marginRight: 10,
  },

  playbackText: {
    fontSize: 12,
    fontFamily: "DelaGothicOne-Regular",
    color: "#d96073",
    textAlign: "center",
    margin: 10,
  },

  playbackParent: {
    // backgroundColor: "red",
    alignItems: "center",
  },

  playback: {
    width: 60,
    height: 60,
  },

  personalizationRect: {
    borderRadius: 10,
    backgroundColor: "#d6dc82",
    // flex: 1,
    width: 115,
    height: 180,
    marginLeft: 10,
  },

  extraRect: {
    left: 150,
    width: 190,
    height: 55,
    borderRadius: 10,
    top: 0,
    backgroundColor: "#d6dc82",
    position: "absolute",
  },

  personalisation: {
    fontSize: 12,
    fontFamily: "DelaGothicOne-Regular",
    color: "#d96073",
    textAlign: "center",
    marginTop: 15,
  },

  setting: {
    // backgroundColor: "yellow",
    width: 45,
    height: 45,
  },
  frameParent: {
    // backgroundColor: "blue",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  logOut: {
    // backgroundColor: "blue",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "Urbanist-Bold",
    color: "#d96073",
    textAlign: "center",
    width: 61,
    height: 20,
  },

  logOutParent: {
    // backgroundColor: "yellow",
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "#d96073",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginRight: 120,
  },
});

export default ProfileScreen;
