// import * as React from "react";
// import Carousel from "react-native-reanimated-carousel";

// import Slide from "./Slide";
// import { useWindowDimensions, Dimensions, View, Image } from "react-native";
// import { useSharedValue } from "react-native-reanimated";
// import Dots from "./Dots";

// const window = Dimensions.get("window");
// const PAGE_WIDTH = window.width;
// const height = PAGE_WIDTH / 2;

// const data = [
//   <View style={{ backgroundColor: "red", width: "100%" }}>
//     <Image source={require("@/assets/Photos/Tutorial 1.png")} />
//   </View>,
//   <Slide index={0} backgroundColor="red" />,
//   <Slide index={1} backgroundColor="orange" />,
//   <Slide index={2} backgroundColor="yellow" />,
//   <Slide index={3} backgroundColor="green" />,
//   <Slide index={4} backgroundColor="blue" />,
// ];

// function SwipeableCarouselParallaxHorizontal() {
//   const windowWidth = useWindowDimensions().width;
//   const scrollOffsetValue = useSharedValue(0);

//   const [index, setIndex] = React.useState(0);

//   const isVertical = true;

//   const baseOptions = isVertical
//     ? {
//         vertical: false,
//         width: windowWidth,
//         height: windowWidth * 0.6,
//       }
//     : {
//         vertical: false,
//         width: windowWidth,
//         height: windowWidth * 0.6,
//       };

//   return (
//     <View>
//       <View
//         style={{
//           height: windowWidth * 0.6,
//         }}
//       >
//         <Carousel
//           {...baseOptions}
//           style={{
//             width: windowWidth,
//           }}
//           loop={false}
//           defaultScrollOffsetValue={scrollOffsetValue}
//           mode="parallax"
//           modeConfig={{
//             parallaxScrollingScale: 0.9,
//             parallaxScrollingOffset: 50,
//           }}
//           // autoPlay={true}
//           // autoPlayInterval={2000}
//           data={data}
//           onSnapToItem={(index) => setIndex(index)}
//           renderItem={({ index }) => data[index]}
//         />
//       </View>

//       <View style={{ marginTop: 16 }}>
//         <Dots data={data} currentIndex={index} />
//       </View>
//     </View>
//   );
// }

// export default SwipeableCarouselParallaxHorizontal;

import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { useWindowDimensions, Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Dots from "./Dots";
import Slide from "./Slide";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;
const height = PAGE_WIDTH / 2;

const image1 = require("@/assets/Photos/Tutorial 1.png");
const image2 = require("@/assets/Photos/Tutorial 2.png");
const image3 = require("@/assets/Photos/Tutorial 3.png");
const image4 = require("@/assets/Photos/Tutorial 4.png");
const image5 = require("@/assets/Photos/Tutorial 5.png");

const data = [
  { imageSource: image1 },
  { imageSource: image2 },
  { imageSource: image3 },
  { imageSource: image4 },
  { imageSource: image5 },
];

function SwipeableCarouselParallaxHorizontal() {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue(0);

  const [, setIndex] = React.useState(0);

  const isVertical = true;

  const baseOptions = isVertical
    ? {
        vertical: false,
        width: windowWidth * 0.6,
        height: windowWidth,
      }
    : {
        vertical: false,
        width: windowWidth,
        height: windowWidth,
      };

  return (
    <View>
      <View
        style={{
          width: windowWidth * 0.8,
          // backgroundColor: "blue",
          height: 300,
          marginLeft: 45,
          margin: -30,
          // justifyContent: "center",
          // alignContent: "center",
        }}
      >
        <Carousel
          {...baseOptions}
          style={{
            width: windowWidth * 0.78,
            // backgroundColor: "red",
            height: 260,
          }}
          loop={false}
          defaultScrollOffsetValue={scrollOffsetValue}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.8,
            parallaxScrollingOffset: 50,
          }}
          data={data}
          onSnapToItem={(index) => setIndex(index)}
          renderItem={({ index }) => (
            <Slide index={index} imageSource={data[index].imageSource} />
          )}
        />
      </View>

      {/* <View style={{ marginTop: 16 }}>
        <Dots data={data} currentIndex={index} />
      </View> */}
    </View>
  );
}

export default SwipeableCarouselParallaxHorizontal;
