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
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Join_Exsit_Class_login = ({navigation}) => {
  return (
    <View style={styles.MainCont}>
      <View style={styles.Mainheader}>
        <View style={styles.icondiv}>
          <Entypo name="book" size={40} color="green" style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Join Existing class</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text>Enter Your class code below</Text>
        </View>
      </View>
      <View style={styles.ipCont}>
        <TextInput style={styles.input} placeholder="@" />
      </View>
      <View style={styles.NewButton}>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.btntxt}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Join_Exsit_Class_login;

const styles = StyleSheet.create({
  MainCont: {
    padding: 5,
    backgroundColor: '#fff',
    height: '100%',
  },

  Mainheader: {
    marginTop: 20,
    padding: 20,
    alignSelf: 'center',
  },
  icondiv: {
    // backgroundColor: '#efa423',
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
    marginTop: 20,
  },
  input: {
    borderWidth: 0.8,
    fontSize: 17,
    padding: 10,
    borderRadius: 5,
    borderColor: '#c2c2c2',
  },
  linkView: {
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  Linktext: {
    color: '#2a6fcb',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  searchbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orcontainer: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptydiv: {
    width: '40%',
    borderWidth: 0.5,
    borderColor: '#ced4db',
  },
  ortext: {
    width: '20%',
  },
  Otxt: {
    textAlign: 'center',
    color: 'gray',
    fontWeight: '600',
  },
  NewButton: {
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  Btn: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
},
  btntxt: {
    color: 'green',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    
  },
});
