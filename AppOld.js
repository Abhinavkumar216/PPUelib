import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {WebView} from 'react-native-webview';

import {Styles} from './Styles.js';
import EBOOKPAGE from './EBOOKPAGE.js';

class LoginMOb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      authPage: '',
      otp: Math.floor(100000 + Math.random() * 900000),
    };
  }
  render() {
    const mobileArray = [
      '9504141640',
      '7903465074',
      '7070893132',
      '7070893133',
      '7070893134',
      '7070893000',
    ];
    const API = () => {
      const mobile = this.state.mobile;
      const otp = this.state.otp;
      // .prettierignore
      const baseUrl = `http://smsjipra.in/http-api.php?username=bhavya321&password=bhavya321&senderid=PPULIB&route=4&number=${mobile}&message=Use ${otp} as Your Login OTP for Patliputra University E-Library and Web-OPAC&templateid=1207163525597889222`;
      if (mobileArray.includes(mobile)) {
        fetch(baseUrl, {method: 'GET', mode: 'cors'})
          .then(
            this.setState({otp: otp, authPage: 'LoginOtp'}),
            ToastAndroid.show('OTP Sent to Mobile No.', ToastAndroid.SHORT),
          )
          .catch(error => alert(error.message));
        return this.props.navigation.navigate('LoginOtp', {
          otp: this.state.otp,
        });
      } else {
        ToastAndroid.show(
          'Your Mobile No. is Not Registered',
          ToastAndroid.SHORT,
        ),
          this.setState({authPage: 'LoginMOb'});
        return this.props.navigation.navigate('LoginMOb');
      }
    };

    return (
      <View style={Styles.container}>
        <StatusBar />
        <Image
          source={require('./assets/logo.jpg')}
          style={{
            height: 150,
            width: 150,
            alignSelf: 'center',
            marginTop: 50,
          }}></Image>
        <Text style={Styles.greeting}>
          {`Welcome To Patliputra University Web OPAC`}
        </Text>
        <View style={Styles.form}>
          <View>
            <Text style={Styles.inputTitle}>Enter Phone No.</Text>
            <TextInput
              style={Styles.input}
              autoCapitalize="none"
              keyboardType="phone-pad"
              onChangeText={mobile => this.setState({mobile})}
              value={this.state.mobile}></TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => {
              API();
              // this.props.navigation.navigate('LoginOtp', {
              //   otp: this.state.otp,
              // });
            }}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>
              Generate OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const LoginOtp = function ({route, navigation}) {
  const [ValidOTP, setValidOTP] = useState(0);
  return (
    <View style={Styles.container}>
      <StatusBar />
      <Image
        source={require('./assets/logo.jpg')}
        style={{
          height: 150,
          width: 150,
          alignSelf: 'center',
          marginTop: 50,
        }}></Image>
      <Text style={Styles.greeting}>
        Welcome To Patliputra University WebOPAC
      </Text>
      {/* <Text>{`This is Trial OTP => ${route.params.otp} `}</Text> */}
      <View style={Styles.form}>
        <View>
          <Text style={Styles.inputTitle}>{`Enter OTP`}</Text>
          <TextInput
            style={Styles.input}
            autoCapitalize="none"
            keyboardType="number-pad"
            onChangeText={otp => setValidOTP(otp)}
            value={ValidOTP}></TextInput>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={Styles.button}
          // onPress={() => navigation.navigate("SideDrawer")}
          onPress={() => Auth()}>
          <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function Home() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#eee',
      }}>
      <Text style={Styles.heading}>
        Welcome To Patliputra University e Library
      </Text>
      <View style={Styles.CardHome}>
        <Image
          source={require('./assets/icon/book.png')}
          style={{width: 64, height: 64}}
        />
        <Text style={Styles.cardHomeText}>3300+ Books</Text>
      </View>
      <View style={Styles.CardHome}>
        <Image
          source={require('./assets/icon/thesis.png')}
          style={{width: 64, height: 64}}
        />
        <Text style={Styles.cardHomeText}>130+ Thesis</Text>
      </View>
      <View style={Styles.CardHome}>
        <Image
          source={require('./assets/icon/journal.png')}
          style={{width: 64, height: 64}}
        />
        <Text style={Styles.cardHomeText}>670+ Journal</Text>
      </View>
    </View>
  );
}
function Academic({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#eee',
      }}>
      <TouchableOpacity
        style={Styles.card}
        onPress={() => navigation.navigate('EBOOKPAGE')}>
        <Image
          source={require('./assets/icon/book.png')}
          style={{width: 64, height: 64}}
        />
        <Text style={Styles.cardText}>E-BOOK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.card}
        onPress={() => navigation.navigate('eDatabase')}>
        <Image
          source={require('./assets/icon/database.png')}
          style={{width: 64, height: 64}}
        />
        <Text style={Styles.cardText}>E-DataBase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.card}
        onPress={() => navigation.navigate('eThesis')}>
        <Image
          source={require('./assets/icon/thesis.png')}
          style={{width: 64, height: 64}}
        />
        <Text style={Styles.cardText}>E-Thesis</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.card}
        onPress={() => navigation.navigate('eJournal')}>
        <Image
          source={require('./assets/icon/journal.png')}
          style={{width: 64, height: 64}}
        />
        <Text style={Styles.cardText}>E-Journal</Text>
      </TouchableOpacity>
    </View>
  );
}

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

// function Announcement() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ fontSize: 26, textAlign: "center", color: "blue" }}>
//         Coming Soon
//       </Text>
//     </View>
//   );
// }
// function Infibinet() {
//   return (
//     <WebView
//       style={{ flex: 1 }}
//       source={{ uri: "https://nlist.inflibnet.ac.in/" }}
//     />
//   );
// }
// function Publication() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ fontSize: 26, textAlign: "center", color: "blue" }}>
//         Coming Soon
//       </Text>
//     </View>
//   );
// }
// function Access() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ fontSize: 26, textAlign: "center", color: "blue" }}>
//         Coming Soon
//       </Text>
//     </View>
//   );
// }

function eDatabase() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, textAlign: 'center', color: 'blue'}}>
        Coming Soon
      </Text>
    </View>
  );
}
function eJournal() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, textAlign: 'center', color: 'blue'}}>
        Coming Soon
      </Text>
    </View>
  );
}
function eThesis() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, textAlign: 'center', color: 'blue'}}>
        Coming Soon
      </Text>
    </View>
  );
}
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
function SodhSindhu() {
  return (
    <WebView style={{flex: 1}} source={{uri: 'https://ess.inflibnet.ac.in/'}} />
  );
}
function Sodhganga() {
  return (
    <WebView
      style={{flex: 1}}
      source={{uri: 'https://shodhganga.inflibnet.ac.in/'}}
    />
  );
}
function vidyamitra() {
  return (
    <WebView
      style={{flex: 1}}
      source={{uri: 'https://content.inflibnet.ac.in/'}}
    />
  );
}

function SideDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Academic"
        component={Academic}
        options={{title: 'E-Resources'}}
      />

      {/* <Drawer.Screen
        name="newspaper"
        component={newspaper}
        options={{ title: "Newspaper" }}
      />
      <Drawer.Screen name="Announcement" component={Announcement} />
      <Drawer.Screen
        name="Infibinet"
        component={Infibinet}
        options={{ title: "Infibinet Login" }}
      />
      <Drawer.Screen
        name="DL"
        component={DL}
        options={{ title: "Digital Library" }}
      />
      <Drawer.Screen
        name="Publication"
        component={Publication}
        options={{ title: "Latest Publication" }}
      /> */}
      <Drawer.Screen
        name="sodhSindhu"
        component={SodhSindhu}
        options={{title: 'Sodh Sindhu'}}
      />
      <Drawer.Screen
        name="sodhganga"
        component={Sodhganga}
        options={{title: 'SodhGanga'}}
      />
      <Drawer.Screen
        name="vidyamitra"
        component={vidyamitra}
        options={{title: 'Vidya Mitra'}}
      />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginMOb">
          <Stack.Screen
            name="LoginMOb"
            component={LoginMOb}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginOtp"
            component={LoginOtp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SideDrawer"
            options={{headerShown: false}}
            component={SideDrawer}
          />
          <Stack.Screen
            name="EBOOKPAGE"
            component={EBOOKPAGE}
            options={{title: 'Books'}}
          />
          <Stack.Screen
            name="eDatabase"
            component={eDatabase}
            options={{title: 'Databases'}}
          />
          <Stack.Screen
            name="eThesis"
            component={eThesis}
            options={{title: 'Thesis'}}
          />
          <Stack.Screen
            name="eJournal"
            component={eJournal}
            options={{title: 'Jouranals'}}
          />

          {/* <Stack.Screen name="jagran" component={jagran} />
          <Stack.Screen name="hindustan" component={hindustan} />
          <Stack.Screen name="bhaskar" component={bhaskar} />
          <Stack.Screen name="timesofindia" component={timesofindia} />
          <Stack.Screen name="hindustanTimes" component={hindustanTimes} />
          <Stack.Screen name="NDL" component={NDL} />
          <Stack.Screen name="DOAB" component={DOAB} />
          <Stack.Screen name="InternetArchive" component={InternetArchive} />
          <Stack.Screen
            name="WorldDigitalLibrary"
            component={WorldDigitalLibrary}
          />
          <Stack.Screen name="openLibrary" component={openLibrary} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
