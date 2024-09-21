import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = ({ navigation }) => {
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

      <View style={styles.innerCont}>
        <View style={{ paddingBottom: 30 }}>
          <Text style={styles.settings}>
            <Text style={styles.setting}>Setting</Text>
            <Text style={styles.s}>S</Text>
          </Text>
          <View>
            <Text style={styles.bodyText}>Account</Text>
            <Text style={styles.bodyText}>Edit Profile</Text>
            <Text style={styles.bodyText}>Change Password</Text>
            <Text style={styles.bodyText}>Privacy</Text>
          </View>
        </View>
        <View>
          <Text style={styles.notifications}>
            <Text style={styles.n}>N</Text>
            <Text style={styles.otifications}>otifications</Text>
          </Text>
          <View>
            <Text style={styles.bodyText}>App Notifications</Text>
            <Text style={styles.bodyText}>Notifications</Text>
          </View>
        </View>
        <View>
          <Text style={styles.more}>
            <Text style={styles.mor}>Mor</Text>
            <Text style={styles.e}>E</Text>
          </Text>
          <View>
            <Text style={styles.bodyText}>Language</Text>
            <Text style={styles.bodyText}>Country</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundCont: {
    backgroundColor: "#D96073",
    flex: 1,
  },

  backButton: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#FFF6EF",
    borderWidth: 1,
    width: 110,
    height: 27,
    marginLeft: 145,
    marginTop: -10,
  },

  backText: {
    fontSize: 14,
    fontFamily: "Kodchasan-Bold",
    color: "#FFF6EF",
    textAlign: "center",
    marginTop: 4,
  },

  innerCont: {
    // backgroundColor: "red",
    margin: 60,
  },
  setting: {
    fontSize: 18,
    fontFamily: "DelaGothicOne-Regular",
  },
  s: {
    fontSize: 60,
    letterSpacing: 6.3,
    fontFamily: "LuxuriousScript-Regular",
  },
  settings: {
    color: "#fff",
    textAlign: "left",
    width: 126,
  },

  bodyText: {
    alignSelf: "stretch",
    fontSize: 16,
    fontFamily: "Kodchasan-Regular",
    color: "#fff",
    textAlign: "left",
    padding: 10,
  },

  n: {
    fontSize: 60,
    fontFamily: "LuxuriousScript-Regular",
  },
  otifications: {
    fontSize: 18,
    fontFamily: "DelaGothicOne-Regular",
  },
  notifications: {
    color: "#fff",
    textAlign: "left",
    width: 145,
  },

  mor: {
    fontSize: 18,
    fontFamily: "DelaGothicOne-Regular",
  },
  e: {
    fontSize: 60,
    fontFamily: "LuxuriousScript-Regular",
  },
  more: {
    color: "#fff",
    textAlign: "left",
    width: 83,
  },
});

export default SettingsScreen;
