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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Create_Teacher_Class = ({navigation}) => {
  return (
    <View style={styles.MainCont}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('options')}
          style={{paddingTop: 10}}>
          <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.Mainheader}>
        <View style={styles.icondiv}>
          <Fontisto name="person" size={25} color="green" style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Create your first class</Text>
        </View>
      </View>
      <View style={styles.ipCont}>
        <TextInput
          style={styles.input}
          placeholder="e.g Math 101, Soccer Team"
        />
      </View>
      <View style={styles.btncont}>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.btntxt}>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkView}>
        <Text style={{color: '#454545'}}>Looking for a class ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('joinclass')}>
          <Text style={styles.Linktext}>Join a class</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Create_Teacher_Class;

const styles = StyleSheet.create({
  MainCont: {
    padding: 5,
  },
  Mainheader: {
    marginTop: 20,
    padding: 20,
    alignSelf: 'center',
  },
  icondiv: {
    backgroundColor: '#efa423',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: 14,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
  },
  ipCont: {
    marginTop: 40,
  },
  input: {
    borderWidth: 0.8,
    fontSize: 17,
    padding: 10,
  },
  btncont:{
    marginTop: 20,
    alignSelf: 'center',


  },
  Btn:{
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    borderColor: '#efa423',
  },
  btntxt:{
    color: '#efa423',
    fontSize: 15,
    textAlign: 'center',

  },
  linkView: {
    marginTop: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Linktext: {
    color: '#2a6fcb',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
