import { Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text styles={styles.signUpText}> Sign Up </Text>

      <Pressable style={styles.login}>
        <Text
          styles={styles.loginText}
          onPress={() => {
            navigation.replace("Main", { screen: "Home" });
          }}
        >
          Log In
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262628",
  },
  signUpText: {
    color: "#d96073",
  },
  login: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#d96073",
    borderWidth: 1,
    // flex: 1,
    width: 120,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  loginText: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Kodchasan-Bold",
    color: "#d96073",
    textAlign: "center",
    width: 61,
    height: 20,
  },
});

export default SignInScreen;
