import React from 'react';
import {View} from 'react-native';

import CardSQ from '../component/CardSQ.js';

export default function Academic({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#eee',
      }}>
      <CardSQ
        title="E-Book"
        image={require('../assets/icon/book.png')}
        onPress={() => navigation.navigate('Ebook')}
      />
      <CardSQ
        title="E-Database"
        image={require('../assets/icon/database.png')}
        onPress={() => navigation.navigate('eDatabase')}
      />
      <CardSQ
        title="E-Thesis"
        image={require('../assets/icon/thesis.png')}
        onPress={() => navigation.navigate('eThesis')}
      />
      <CardSQ
        title="E-Journal"
        image={require('../assets/icon/journal.png')}
        onPress={() => navigation.navigate('eJournal')}
      />
    </View>
  );
}
