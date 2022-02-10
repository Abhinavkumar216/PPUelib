import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Image
        source={require('../assets/logo.jpg')}
        style={{
          height: 250,
          width: 250,
          marginTop: -50,
        }}
      />
      <ActivityIndicator size="large" style={{marginVertical: 20}} />
    </View>
  );
}
