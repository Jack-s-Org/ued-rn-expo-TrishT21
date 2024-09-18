// import React from "react";
// import { Text, View, Image} from "react-native";

// const Slide = ({ index, backgroundColor }) => {
//   return (
//     <View
//       style={{
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor,
//       }}
//     >
//       <Text>{index}</Text>
//     </View>
//   );
// };

// export default Slide;

// Slide.js
import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

const Slide = ({ imageSource }) => {
  return (
    <ImageBackground
      source={imageSource}
      style={styles.slide}
      imageStyle={styles.imageStyle}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Foundation of Vinyasa</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 270,
    width: 200,

    marginLeft: 60,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -120,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    // fontWeight: "bold",
    fontFamily: "KodBold",
    // justifyContent: "center",
    // alignContent: "center",
    textAlign: "center",
  },
  imageStyle: {
    borderRadius: 10,
  },
});

export default Slide;
