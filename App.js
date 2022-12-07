import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Homie from './src/components/Homie';
import Login from './src/components/Login';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Homie />
      {/* <Login /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
