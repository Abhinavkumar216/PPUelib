// function DL({ navigation }) {
//   return (
//     <View
//       style={{ flex: 1, justifyContent: "space-around", marginVertical: 100 }}
//     >
//       <TouchableOpacity
//         style={[Styles.button, { backgroundColor: "#00ff" }]}
//         onPress={() => navigation.navigate("NDL")}
//       >
//         <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
//           National Digital Library
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={Styles.button}
//         onPress={() => navigation.navigate("DOAB")}
//       >
//         <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
//           Directory of Open Access Books
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={Styles.button}
//         onPress={() => navigation.navigate("InternetArchive")}
//       >
//         <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
//           Internet Archive
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={Styles.button}
//         onPress={() => navigation.navigate("WorldDigitalLibrary")}
//       >
//         <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
//           World Digital Library
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function NDL() {
//   return (
//     <WebView
//       style={{ flex: 1 }}
//       source={{ uri: "https://ndl.iitkgp.ac.in/" }}
//     />
//   );
// }

// function DOAB() {
//   return (
//     <WebView
//       style={{ flex: 1 }}
//       source={{ uri: "https://www.doabooks.org/" }}
//     />
//   );
// }

// function InternetArchive() {
//   return (
//     <WebView style={{ flex: 1 }} source={{ uri: "https://archive.org/" }} />
//   );
// }

// function WorldDigitalLibrary() {
//   return (
//     <WebView style={{ flex: 1 }} source={{ uri: "https://www.wdl.org/en/" }} />
//   );
// }

// function openLibrary() {
//   return (
//     <WebView style={{ flex: 1 }} source={{ uri: "https://openlibrary.org/" }} />
//   );
// }
