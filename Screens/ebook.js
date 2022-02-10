import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Loading from './Loading';

export default function Ebook({navigation}) {
  const [filteredData, setfilteredData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
    return;
  }, []);

  const fetchPosts = () => {
    const apiURL = 'https://ppuelib.org/api/booklist';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJSON => {
        setfilteredData(resJSON);
        setmasterData(resJSON);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        alert(err.message);
      });
  };

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.book_name
          ? item.book_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredData(newData);
      setSearch(text);
    } else {
      setfilteredData(masterData);
      setSearch(text);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('EbookPreview', {url: item.files})}>
      <Text style={styles.item}>{`${item.book_name} -> ${item.author}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Search Here"
            underlineColorAndroid="transparent"
            onChangeText={text => searchFilter(text)}
          />
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  itemStyle: {
    padding: 15,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#506AD4',
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  title: {
    fontSize: 32,
  },
});
