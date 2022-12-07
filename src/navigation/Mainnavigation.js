import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';
import GroupConversation from '../components/GroupConversation';

const Stack = createNativeStackNavigator();

const Mainnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="header">
        <Stack.Screen
          name="header"
          component={Header}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="footer" component={Footer} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="GroupConversation" component={GroupConversation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Mainnavigation;

const styles = StyleSheet.create({});
