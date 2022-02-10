import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';

import {Styles} from '../Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSelector, useDispatch} from 'react-redux';
import {userTocken} from '../Redux/Reducer';

export default function LoginOtp({route, navigation}) {
  const dispatch = useDispatch();
  const [ValidOTP, setValidOTP] = useState('');

  const storeData = async value => {
    try {
      const RandomTocken = Math.random().toString(36).slice(2);
      await AsyncStorage.setItem('userToken', RandomTocken.toString());
      dispatch(userTocken(RandomTocken.toString()));
      console.log('RandomTocken Dispatched', RandomTocken);
    } catch (e) {
      console.log(e);
    }
  };
  const Auth = async () => {
    if (ValidOTP == route.params.otp) {
      storeData();
    } else {
      ToastAndroid.show('Wrong OTP, Please Try Again ', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={Styles.container}>
      <Image
        source={require('../assets/logo.jpg')}
        style={{
          height: 150,
          width: 150,
          alignSelf: 'center',
          marginTop: 50,
        }}></Image>
      <Text style={Styles.greeting}>
        Welcome To Patliputra University WebOPAC
      </Text>
      <View style={Styles.form}>
        <View>
          <Text style={Styles.inputTitle}>{`Enter OTP `}</Text>
          <TextInput
            style={Styles.input}
            autoCapitalize="none"
            keyboardType="number-pad"
            onChangeText={otp => setValidOTP(otp)}
            value={ValidOTP}></TextInput>
        </View>
      </View>
      <View>
        <TouchableOpacity style={Styles.button} onPress={() => Auth()}>
          <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
