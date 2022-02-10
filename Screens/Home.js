import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  BackHandler,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Styles} from '../Styles';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {userTocken} from '../Redux/Reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  // const count = useSelector(state => state.counter.value);
  const Tocken = useSelector(state => state.counter.userTocken);
  const dispatch = useDispatch();

  const [BookCount, setBookCount] = useState(0);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      dispatch(userTocken(null));
    } catch (e) {
      // remove error
      alert('Something Went Wrong', e);
    }
  };

  useEffect(() => {
    const datafetch = axios({
      method: 'get',
      url: 'https://ppuelib.org/api/booklist',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        const ArrData = response.data;
        const Arr = Object.keys(ArrData);
        // console.log(Arr.length);
        setBookCount(Arr.length);
      })
      .catch(error => {
        console.log(error);
      });
    return () => {
      datafetch;
    };
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
        Welcome To Patliputra University e-Library
      </Text>
      <TouchableOpacity
        style={Styles.CardHome}
        onPress={() => navigation.navigate('Ebook')}>
        <Image
          source={require('../assets/icon/book.png')}
          style={{width: 64, height: 64}}
        />
        {!BookCount ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={Styles.cardHomeText}>{BookCount} Books</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.CardHome}
        onPress={() => navigation.navigate('eThesis')}>
        <Image
          source={require('../assets/icon/thesis.png')}
          style={{width: 64, height: 64}}
        />
        <Text style={Styles.cardHomeText}>Coming Soon</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.CardHome}
        onPress={() => navigation.navigate('eJournal')}>
        <Image
          source={require('../assets/icon/journal.png')}
          style={{width: 64, height: 64}}
        />
        <Text style={Styles.cardHomeText}>Coming Soon</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeValue()}
        style={{
          backgroundColor: '#EA4c46',
          paddingHorizontal: 25,
          paddingVertical: 10,
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 16, color: '#fff'}}>Signout </Text>
      </TouchableOpacity>
    </View>
  );
}
