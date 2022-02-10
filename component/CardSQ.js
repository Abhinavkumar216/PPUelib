import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Styles} from '../Styles';
export default function CardSQ(props) {
  return (
    <TouchableOpacity style={Styles.card} onPress={props.onPress}>
      <Image source={props.image} style={{width: 64, height: 64}} />
      <Text style={Styles.cardText}>{props.title}</Text>
    </TouchableOpacity>
  );
}
