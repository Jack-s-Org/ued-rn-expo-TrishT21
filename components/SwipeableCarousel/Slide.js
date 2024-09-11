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
    height: 300,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Slide;
