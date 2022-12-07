import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Messages from './Messages';
import People from './People';
import Files from './Files';
import Settings from './Settings';

const Tab = createMaterialTopTabNavigator();

const Body = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="messages" component={Messages} />
        <Tab.Screen name="files" component={Files} />
        <Tab.Screen name="people" component={People} />
        <Tab.Screen name="setting" component={Settings} />
      </Tab.Navigator>
    </>
  );
};

export default Body;

const styles = StyleSheet.create({
  mainCont: {
    padding: 20,
  },
});
