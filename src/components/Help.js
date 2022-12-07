import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Help = () => {
  return (
    <View style={styles.maincont}>
      <TouchableOpacity style={styles.cont}>
        <View style={styles.rounded}>
          <AntDesign name="questioncircleo" size={27} color="#1c8bde" />
        </View>
        <View>
          <Text style={styles.Text}>View F.A.Q</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cont}>
        <View style={styles.rounded}>
          <EvilIcons name="sc-telegram" size={30} color="#1c8bde" />
        </View>
        <View>
          <Text style={styles.Text}>Contact Support</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  maincont: {
    padding: 20,
    height: '100%',
    backgroundColor: '#fff',
  },
  rounded: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 18,
    color: '#3f3f3f',
    fontWeight: '500',
    marginLeft: 15,
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
