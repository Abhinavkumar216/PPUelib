import React, {useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Loading from './Loading';

const WebViewLoading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <ActivityIndicator size={30} />
    </View>
  );
};

export function Vidyamitra() {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: 'https://content.inflibnet.ac.in/'}}
        renderLoading={WebViewLoading}
        startInLoadingState={true}
      />
    </View>
  );
}

export function Sodhsindhu() {
  return (
    <View style={{flex: 1}}>
      <WebView
        javaScriptEnabled
        renderLoading={WebViewLoading}
        startInLoadingState={true}
        source={{uri: 'https://ess.inflibnet.ac.in/'}}
      />
    </View>
  );
}

export function Sodhganga() {
  return (
    <View style={{flex: 1}}>
      <WebView
        javaScriptEnabled
        renderLoading={WebViewLoading}
        startInLoadingState={true}
        source={{uri: 'https://shodhganga.inflibnet.ac.in/'}}
      />
    </View>
  );
}

// function Infibinet() {
//   return (
//     <WebView
//       style={{ flex: 1 }}
//       source={{ uri: "https://nlist.inflibnet.ac.in/" }}
//     />
//   );
// }
