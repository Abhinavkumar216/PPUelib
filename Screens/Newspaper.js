// function newspaper({ navigation }) {
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: "row",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         backgroundColor: "#eee",
//       }}
//     >
//       <TouchableOpacity
//         style={Styles.card}
//         onPress={() => navigation.navigate("jagran")}
//       >
//         <Image
//           source={require("./assets/icon/jagran.png")}
//           resizeMode="contain"
//           style={{ width: 128, height: 128 }}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={Styles.card}
//         onPress={() => navigation.navigate("bhaskar")}
//       >
//         <Image
//           source={require("./assets/icon/bhaskar.png")}
//           resizeMode="contain"
//           style={{ width: 128, height: 128 }}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={Styles.card}
//         onPress={() => navigation.navigate("hindustan")}
//       >
//         <Image
//           source={require("./assets/icon/hindustan.png")}
//           resizeMode="contain"
//           style={{ width: 128, height: 128 }}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={Styles.card}
//         onPress={() => navigation.navigate("timesofindia")}
//       >
//         <Image
//           source={require("./assets/icon/timesOfIndia.png")}
//           resizeMode="contain"
//           style={{ width: 128, height: 128 }}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={Styles.card}
//         onPress={() => navigation.navigate("hindustanTimes")}
//       >
//         <Image
//           source={require("./assets/icon/hindTimes.png")}
//           resizeMode="contain"
//           style={{ width: 128, height: 128 }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }

// function hindustanTimes() {
//   return (
//     <WebView
//       style={{ flex: 1 }}
//       source={{ uri: "https://epaper.hindustantimes.com/" }}
//     />
//   );
// }

// function hindustan() {
//   return (
//     <WebView
//       style={{ flex: 1 }}
//       source={{ uri: "https://epaper.livehindustan.com/" }}
//     />
//   );
// }

// function bhaskar() {
//   return (
//     <WebView
//       style={{ flex: 1 }}
//       source={{ uri: "https://epaper.bhaskar.com/" }}
//     />
//   );
// }
// function timesofindia() {
//   return (
//     <WebView
//       style={{ flex: 1 }}
//       source={{
//         uri: "https://epaper.timesgroup.com/TOI/TimesOfIndia/index.html?a=c#",
//       }}
//     />
//   );
// }
// function jagran() {
//   return (
//     <WebView
//       style={{ flex: 1 }}
//       source={{ uri: "https://epaper.jagran.com/epaper/" }}
//     />
//   );
// }
