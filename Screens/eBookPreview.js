import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';

export default function EbookPreview({route}) {
  const {url} = route.params;
  const source = {
    uri: url,
    cache: true,
  };
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onError={error => {
          alert(error);
        }}
        onPressLink={uri => {
          alert(`Do You Want to Visit External Link ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
