import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  ToastAndroid,
  Alert,
  BackHandler,
} from 'react-native';
import {Styles} from '../Styles.js';
import axios from 'axios';
import Loading from './Loading.js';

export default class LoginMOb extends Component {
  constructor() {
    super();
    this.state = {
      mobile: '',
      authPage: '',
      mobileArr: [],
      otp: Math.floor(100000 + Math.random() * 900000),
      loading: true,
    };
    this.mobileFetch = axios({
      method: 'get',
      url: 'https://ppuelib.org/api/profilelist/',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        const ArrData = response.data;
        this.setState({mobileArr: ArrData, loading: false});
      })
      .catch(error => {
        Alert.alert('Newtwork Error', 'Failed to Connect With Server', [
          {
            text: 'Exit',
            onPress: () => BackHandler.exitApp(),
            style: 'destructive',
          },
          {text: 'Retry', onPress: () => this.MobileFetch},
        ]);
        // alert('Network Error', error);
        // this.setState({loading: false});
      });
  }
  componentDidMount() {
    this.MobileFetch;
  }
  componentWillUnmount() {
    this.MobileFetch;
  }

  render() {
    const API = () => {
      const mobile = this.state.mobile;
      const otp = this.state.otp;
      const baseUrl = `https://ppuelib.org/apiotp?mobileno=${mobile}&otp=${otp}`;
      const mobileFilter = this.state.mobileArr.filter(item =>
        `${item.mobile}`.includes(mobile),
      );
      if (mobileFilter && mobileFilter.length) {
        fetch(baseUrl, {method: 'GET', mode: 'cors'})
          .then(
            this.setState({otp, authPage: 'LoginOtp'}),
            ToastAndroid.show('OTP Sent to Mobile No.', ToastAndroid.SHORT),
          )
          .catch(error => alert(error.message));
        console.log('OTP Generated');
        return this.props.navigation.navigate('LoginOtp', {
          otp: this.state.otp,
        });
      } else {
        ToastAndroid.show(
          'Your Mobile No. is Not Registered',
          ToastAndroid.SHORT,
        ),
          this.setState({authPage: 'LoginMOb'});
        alert('Mobile no is not registered');
        return this.props.navigation.navigate('LoginMOb');
      }
    };

    // console.log('mobileArr => ', this.state.mobileArr);

    if (this.state.loading) return <Loading />;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View>
          <Image
            source={require('../assets/logo.jpg')}
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
              onPress={() => API()}
              // onPress={() => this.props.navigation.navigate('LoginOtp')}
            >
              <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>
                Generate OTP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
