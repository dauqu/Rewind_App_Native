import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
const role = require('../assets/images/role.png');
const role2 = require('../assets/images/role2.png');
const userbg = require('../assets/images/usergif.png');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
const Options = ({navigation}) => {
  return (
    <View style={styles.MainCont}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('login')}
          style={{paddingTop: 10}}>
          <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.ImgCont}>
        <Image source={userbg} style={styles.role} />
      </View>
      <View style={styles.InfoCont}>
        <Text style={styles.uprtext}>Tell us about yourself</Text>
        <Text style={styles.lowertext}>
          What is your role in the organization ?
        </Text>
      </View>
      <View style={styles.optionBtn}>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation.navigate('teachercreateclass')}>
          <Fontisto name="person" size={25} color="green" style={styles.icon} />
          <View style={styles.textconatiner}>
            <View style={{width: '80%'}}>
              <Text style={styles.optionText}>I'm a Teacher</Text>
            </View>
            <View style={{width: '20%'}}>
              <AntDesign name="right" size={25} color="#b7b7b7" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation.navigate('Student_Info')}>
          <Entypo
            name="graduation-cap"
            size={25}
            color="magenta"
            style={styles.icon}
          />
          <View style={styles.textconatiner}>
            <View style={{width: '80%'}}>
              <Text style={styles.optionText}>I'm a Student</Text>
            </View>
            <View style={{width: '20%'}}>
              <AntDesign name="right" size={25} color="#b7b7b7" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation.navigate('teachercreateclass')}>
          <Entypo name="heart" size={25} color="red" style={styles.icon} />
          <View style={styles.textconatiner}>
            <View style={{width: '80%'}}>
              <Text style={styles.optionText}>I'm a Parent</Text>
            </View>
            <View style={{width: '20%'}}>
              <AntDesign name="right" size={25} color="#b7b7b7" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  MainCont: {
    backgroundColor: '#f6f6f6',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
  },
  ImgCont: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    height: 350,
  },
  role: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  InfoCont: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  uprtext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
    paddingBottom: 10,
  },
  lowertext:{
    fontSize: 16,
    color: 'gray',
    letterSpacing: 1,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  optionBtn: {
    backgroundColor: '#fff',
    marginTop: 60,
    padding: 10,
  },
  mainButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 20,
  },
  optionText: {
    fontSize: 20,
    textAlign: 'left',
    color: '#454545',
  },
  icon: {
    width: 40,
  },
  textconatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
