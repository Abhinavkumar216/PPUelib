import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import eThesis from './Screens/eThesis';
import eJournal from './Screens/eJournal';
import eDatabase from './Screens/eDatabase';
import {Vidyamitra, Sodhganga, Sodhsindhu} from './Screens/Webview.js';
import Ebook from './Screens/ebook';
import EbookPreview from './Screens/eBookPreview';
import LoginMOb from './Screens/LoginMob.js';
import Home from './Screens/Home.js';
import LoginOtp from './Screens/LoginOtp';
import Academic from './Screens/Academic';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {userTocken} from './Redux/Reducer';

function SideDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Academic"
        component={Academic}
        options={{title: 'E-Resources'}}
      />

      <Drawer.Screen
        name="sodhSindhu"
        component={Sodhsindhu}
        options={{title: 'Sodh Sindhu'}}
      />
      <Drawer.Screen
        name="sodhganga"
        component={Sodhganga}
        options={{title: 'SodhGanga'}}
      />
      <Drawer.Screen
        name="vidyamitra"
        component={Vidyamitra}
        options={{title: 'Vidya Mitra'}}
      />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigation() {
  const dispatch = useDispatch();
  //   const [userToken, setUserToken] = React.useState(null);
  const Tocken = useSelector(state => state.counter.userTocken);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      //   if (value !== null) {
      dispatch(userTocken(value));
      //   }
    } catch (e) {
      console.log('Usertoken err => ', e);
    }
  };

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {Tocken === null ? (
            <Stack.Group>
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
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="SideDrawer"
                options={{headerShown: false}}
                component={SideDrawer}
              />
              <Stack.Screen
                name="Ebook"
                component={Ebook}
                options={{title: 'Library '}}
              />
              <Stack.Screen
                name="EbookPreview"
                component={EbookPreview}
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
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
