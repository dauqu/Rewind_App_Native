import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Drawer from './Drawer';

const Homie = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Drawer />
    </View>
  );
};

export default Homie;

const styles = StyleSheet.create({});
