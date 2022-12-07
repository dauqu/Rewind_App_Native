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
const Join_Class = ({navigation}) => {
  return (
    <View style={styles.MainCont}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('teachercreateclass')}
          style={{paddingTop: 10}}>
          <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.Mainheader}>
        <View style={styles.icondiv}>
          <Entypo name="book" size={40} color="green" style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Join your first class</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text>Enter Your class code below</Text>
        </View>
      </View>
      <View style={styles.ipCont}>
        <TextInput style={styles.input} placeholder=" @ Code "  placeholderTextColor="#454545"/>
      </View>
      <View style={styles.btncont}>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.btntxt}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkView}>
        <TouchableOpacity
          style={styles.searchbox}
          onPress={() => navigation.navigate('classSearch')}>
          <Fontisto
            name="search"
            size={13}
            style={{marginRight: 10, color: '#2a6fcb'}}
          />
          <Text style={{color: '#2a6fcb', fontWeight: '500'}}>
            Search for class instead
          </Text>
        </TouchableOpacity>
        <View style={styles.orcontainer}>
          <View style={styles.emptydiv}></View>
          <View style={styles.ortext}>
            <Text style={styles.Otxt}>OR</Text>
          </View>
          <View style={styles.emptydiv}></View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('teachercreateclass')}>
          <Text style={styles.Linktext}>Create a class</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Join_Class;

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
  },
  btncont: {
    marginTop: 20,
    alignSelf: 'center',
  },
  Btn: {
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    borderColor: 'green',
  },
  btntxt: {
    color: 'green',
    fontSize: 15,
    textAlign: 'center',
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
});
