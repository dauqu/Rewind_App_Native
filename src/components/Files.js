import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Files = () => {
  return (
    <View style={styles.mainCont}>
      <Text style={styles.topText}>Welcome to Files</Text>
      <Text style={styles.lowtext}>
        All of the files that you share to your class will appear her, making it
        even easier for your class to access your shared content
      </Text>
    </View>
  );
};

export default Files;

const styles = StyleSheet.create({
  mainCont: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  topText: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: 120,
  },
  lowtext: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
});
