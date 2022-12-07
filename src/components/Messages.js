import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Floating_Button from './Floating_Button';
const cartoon = require('../assets/images/catoon.png');

const Messages = ({navigation}) => {
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.infodiv}
          onPress={() => navigation.navigate('Chatting')}>
          <View style={styles.leftview}>
            <View style={styles.roundView}>
              <Image
                source={cartoon}
                resizeMode="contain"
                style={styles.roundImage}
              />
            </View>
          </View>
          <View style={styles.rightview}>
            <View style={styles.uppertextcont}>
              <Text style={styles.uppertext}>Start Conversation</Text>
              <Text style={styles.uppertextright}></Text>
            </View>
            <View style={styles.lowertextcont}>
              <Text style={styles.lowertext}>Message Here... </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.floatingBtn}> */}
      {/* <FloatingAction
          overlayColor="rgba(68, 68, 68, 0.6)"
          // actions={actions}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
        /> */}

      {/* </View> */}
      <Floating_Button />
    </>
  );
};

export default Messages;

const styles = StyleSheet.create({
  infodiv: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    // alignItems: 'center',
    // height: '100%',
  },
  roundView: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
  },
  roundImage: {
    width: 60,
    height: 60,
    alignItems: 'center',
  },
  leftview: {
    width: '20%',
    alignItems: 'center',
  },
  rightview: {
    width: '80%',
    padding: 10,
  },
  uppertextcont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uppertext: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3f3f3f',
  },
  uppertextright: {
    fontSize: 14,
  },
  lowertextcont: {},
  lowertext: {
    fontSize: 16,
  },
  // floatingBtn: {
  //   position: 'absolute',
  //   right: 20,
  //   bottom: 50,
  // },
});
